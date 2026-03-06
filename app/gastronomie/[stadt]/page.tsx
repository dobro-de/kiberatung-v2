import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { cityMap, generateStaticParamsList } from "./cityData";

import LocalHero from "./components/LocalHero";
import CityStats from "./components/CityStats";
import ProblemCards from "./components/ProblemCards";
import FeatureGrid from "./components/FeatureGrid";
import CaseStudy from "./components/CaseStudy";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";

// ─── Static Params ──────────────────────────────────────────────────────────
export function generateStaticParams() {
  return generateStaticParamsList();
}

// ─── Metadata ───────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ stadt: string }>;
}): Promise<Metadata> {
  const { stadt } = await params;
  const city = cityMap[stadt];
  if (!city) return {};

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: {
      canonical: `https://kiberatung-v2.vercel.app/gastronomie/${city.slug}`,
    },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: `https://kiberatung-v2.vercel.app/gastronomie/${city.slug}`,
      siteName: "KI Beratung",
      locale: "de_DE",
      type: "website",
    },
  };
}

// ─── JSON-LD Schema ──────────────────────────────────────────────────────────
function SchemaMarkup({ cityName, slug }: { cityName: string; slug: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `KI Beratung Gastronomie ${cityName}`,
    serviceType: "KI Beratung",
    areaServed: cityName,
    provider: {
      "@type": "Organization",
      name: "KI Beratung",
      url: "https://kiberatung-v2.vercel.app",
    },
    url: `https://kiberatung-v2.vercel.app/gastronomie/${slug}`,
    description: `Professionelle KI Beratung für die Gastronomie in ${cityName}. Prozessautomatisierung, Kostensenkung und Umsatzsteigerung durch künstliche Intelligenz.`,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      description: "Kostenlose Erstberatung",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default async function GastronomieStadtPage({
  params,
}: {
  params: Promise<{ stadt: string }>;
}) {
  const { stadt } = await params;
  const city = cityMap[stadt];
  if (!city) notFound();

  const sections = {
    hero: <LocalHero key="hero" city={city} />,
    stats: <CityStats key="stats" city={city} />,
    problems: <ProblemCards key="problems" city={city} />,
    features: <FeatureGrid key="features" city={city} />,
    caseStudy: <CaseStudy key="caseStudy" city={city} />,
    faq: <FAQSection key="faq" city={city} />,
    cta: <CTASection key="cta" city={city} />,
  };

  // Layout variants
  let order: (keyof typeof sections)[];
  if (city.layout === 1) {
    order = ["hero", "stats", "problems", "features", "caseStudy", "faq", "cta"];
  } else if (city.layout === 2) {
    order = ["hero", "caseStudy", "problems", "stats", "features", "faq", "cta"];
  } else {
    order = ["hero", "features", "stats", "caseStudy", "problems", "faq", "cta"];
  }

  return (
    <>
      <SchemaMarkup cityName={city.name} slug={city.slug} />
      <Nav />
      <main>{order.map((key) => sections[key])}</main>
      <Footer />
    </>
  );
}
