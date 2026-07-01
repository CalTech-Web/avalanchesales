import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const defaultTitle =
  "Avalanche Sales | Exclusive Leads. Real Customers. Predictable Growth.";
const defaultDescription =
  "Avalanche Marketing Agency delivers exclusive, AI validated, pay-per-lead customer acquisition across Google, LinkedIn, Facebook, Instagram, Bing, and YouTube, with no long-term contracts.";

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
        width: 800,
        height: 800,
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
      className={`${poppins.variable} ${roboto.variable} h-full antialiased`}
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
