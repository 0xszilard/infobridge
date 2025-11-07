import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import "@/styles/globals.css";
import Footer from "@/components/ui/footer";
import { keywords } from "@/constants";
import GoogleTag from "@/components/ui/GoogleTag";
import CookieBanner from "@/components/ui/cookie-banner";
import Navbar from "@/components/ui/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Custom Software for Creators & Coaches - InfoBridge",
    template: "%s | InfoBridge - Software & Consulting for Online Creators",
  },
  description:
    "We build custom software that helps content creators, coaches, and infoproduct businesses stand out, scale fast, and systematize everything.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL),
  alternates: {
    canonical: process.env.NEXT_PUBLIC_URL,
  },
  keywords: keywords,
  openGraph: {
    title: "Custom Software for Creators & Coaches - InfoBridge",
    description:
      "Helping infoproduct businesses, coaches, and creators systematize, scale, and stand out with tailored software solutions.",
    siteName: "InfoBridge",
    type: "website",
    url: process.env.NEXT_PUBLIC_URL,
    images: [
      {
        url: "/opengraph-image.png",
        secureUrl: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Custom Software Solutions by InfoBridge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@InfoBridge",
    title: "Custom Software for Creators & Coaches - InfoBridge",
    description:
      "Tailored software to help creators, coaches, and info businesses scale fast and systematize everything.",
    creator: "@InfoBridge",
    images: {
      url: "/twitter-image.png",
      alt: "Custom software for the creator economy",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {process.env.VERCEL_ENV === "production" && <GoogleTag gaId="G-S0ZGXWS3SL" />}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="mt-16">{children}</main>
          <Footer />
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
