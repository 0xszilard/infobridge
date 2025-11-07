import React from "react";
import { Card, CardContent } from "../ui/card";
import { Quote } from "lucide-react";

export default function AboutTestimonials() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-20">
      <Card className="bg-primary text-primary-foreground container m-auto">
        <CardContent className="p-8 md:p-12">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <Quote className="mx-auto h-12 w-12 opacity-50" />
            <blockquote className="text-xl font-medium md:text-2xl">
              "We turned our idea into a real SaaS product in just 3 weeks — and it’s already generating revenue. The
              team made everything feel clear and under control. They get what creators need — and they deliver fast."
            </blockquote>
            <div className="space-y-2">
              <div className="font-semibold">Jennifer W.</div>
              <div className="text-sm opacity-90">~ 240k followers on Instagram</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
