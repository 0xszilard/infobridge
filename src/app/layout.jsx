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
    default: "Custom Software & Systems for Founders - InfoBridge",
    template: "%s | InfoBridge",
  },
  description:
    "We build custom software, automation, and acquisition systems that help founders scale smarter, operate leaner, and grow faster.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL),
  alternates: {
    canonical: process.env.NEXT_PUBLIC_URL,
  },
  keywords,
  openGraph: {
    title: "Custom Software & Systems for Founders - InfoBridge",
    description:
      "InfoBridge helps founders and SaaS teams build scalable software, automate workflows, and install growth systems that drive acquisition and retention.",
    siteName: "InfoBridge",
    type: "website",
    url: process.env.NEXT_PUBLIC_URL,
    images: [
      {
        url: "/opengraph-image.png",
        secureUrl: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "InfoBridge - Custom Software & Growth Systems for Founders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@InfoBridge",
    title: "Custom Software & Systems for Founders - InfoBridge",
    description: "We help founders and SaaS teams scale with custom software, automations, and growth frameworks.",
    creator: "@InfoBridge",
    images: {
      url: "/twitter-image.png",
      alt: "InfoBridge - Software & Systems for Founders",
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
