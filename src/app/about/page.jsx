import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import ValuesSection from "@/components/about/ValuesSection";
import AboutTestimonials from "@/components/about/AboutTestimonials";
import AboutCTA from "@/components/about/AboutCTA";
import AboutStats from "@/components/about/AboutStats";

export const metadata = {
  title: "About Us",
  description:
    "InfoBridge helps founders and SaaS teams scale smarter with custom software, automation, and acquisition systems. Learn more about our mission, values, and team.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_URL}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <ValuesSection />
      <AboutTestimonials />
      <AboutStats />
      <AboutCTA />
    </>
  );
}
