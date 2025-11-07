import BookingHero from "@/components/booking/BookingHero";
/* import BookingForm from "@/components/booking/BookingForm" */
import WhatToExpect from "@/components/booking/WhatToExpect";
import SocialProof from "@/components/booking/SocialProof";
import BookingFaq from "@/components/booking/BookingFaq";
import Booking from "@/components/home/Booking";

export const metadata = {
  title: "Book a Free Discovery Call - Software & Systems for Founders",
  description:
    "Book a free discovery call with InfoBridge — we build custom software, automation, and growth systems for founders and SaaS teams. Get expert guidance tailored to your business.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_URL}/booking`,
  },
};

export default function BookingPage() {
  return (
    <>
      <BookingHero />
      <Booking />
      {/*  <BookingForm /> */}
      <WhatToExpect />
      <BookingFaq />
      <SocialProof />
    </>
  );
}
