import JsonLd from "../ui/json-ld";

export const faqs = [
  {
    question: "How long is the consultation?",
    answer:
      "Free strategy sessions are 15 minutes, technical audits are 60 minutes, and enterprise consultations are 90 minutes.",
  },
  {
    question: "What if I'm not ready to start immediately?",
    answer:
      "That's perfectly fine! Our consultations are designed to help you plan and prepare, regardless of your timeline.",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Absolutely. We're happy to sign your NDA before the consultation to ensure your ideas remain confidential.",
  },
  {
    question: "What happens after the consultation?",
    answer:
      "You'll receive a detailed follow-up email with our recommendations, estimated timeline, and a custom proposal if you decide to move forward.",
  },
  {
    question: "Can I reschedule if needed?",
    answer: "Yes, just let us know at least 24 hours in advance and we'll be happy to reschedule your consultation.",
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes! We work with clients worldwide and can accommodate different time zones for consultations.",
  },
];

export default function BookingFaq() {
  const data = faqs.map((question) => ({
    "@type": "Question",
    name: question.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: question.answer,
    },
  }));

  const faqjson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [...data],
  };
  return (
    <>
      <JsonLd data={faqjson} />
      <section className="px-4 py-16 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12 space-y-6 text-center">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {faqs.map((i, idx) => (
              <div key={idx}>
                <h3 className="mb-2 font-semibold">{i.question}</h3>
                <p className="text-muted-foreground text-sm">{i.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
