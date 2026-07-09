import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const defaultTitle =
  "Avalanche Sales | Exclusive Sales Opportunities. Real Buyers. Predictable Growth.";
const defaultDescription =
  "Avalanche Sales is your AI-powered customer acquisition partner, delivering exclusive, human-verified buying opportunities directly to your business. No shared data, no recycled prospects, no long-term contracts.";

export const metadata: Metadata = {
  metadataBase: new URL("https://avalanchesales.com"),
  title: {
    default: defaultTitle,
    template: "%s | Avalanche Sales",
  },
  description: defaultDescription,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://avalanchesales.com",
    siteName: "Avalanche Sales",
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/images/logos/avalanche-logo-square-orange.png",
        width: 750,
        height: 750,
        alt: "Avalanche Sales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/images/logos/avalanche-logo-square-orange.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Avalanche Marketing Agency",
  alternateName: "Avalanche Sales",
  url: "https://avalanchesales.com",
  logo: "https://avalanchesales.com/images/logos/avalanche-logo-square-orange.png",
  image: "https://avalanchesales.com/images/logos/avalanche-logo-square-orange.png",
  telephone: "+1-877-499-9111",
  email: "info@AvalancheSales.com",
  description: defaultDescription,
  foundingDate: "1999",
  areaServed: "US",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
