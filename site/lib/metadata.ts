import type { Metadata } from "next";
import { company } from "./data";

const siteUrl = "https://avalanchesales.com";
const ogImage = "/images/logos/avalanche-logo-square-orange.png";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = `${title} | ${company.shortName}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      url: `${siteUrl}${path}`,
      siteName: company.shortName,
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 800,
          height: 800,
          alt: company.shortName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}
