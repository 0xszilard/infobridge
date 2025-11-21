"use client";
import React from "react";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";

export default function Booking() {
  return (
    <section id="contact" className="px-4 pt-10 pb-20 md:px-6">
      <div className="m-auto grid max-w-5xl grid-cols-1 grid-rows-2 gap-8 md:grid-cols-2 md:grid-rows-1">
        <div>
          <Badge className="mb-2">BOOK YOUR FREE STRATEGY CALL</Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Free 15-Minute Product Strategy Call
          </h2>
          <p className="text-muted-foreground mb-2 text-lg">
            On this call, we'll explore how you can turn your content, expertise, or coaching business into a real SaaS
            product or platform — without needing to code or hire a dev team yourself.
          </p>
          <p className="text-muted-foreground mb-4 text-lg">
            Choose a time that works for you, and we'll map out what your idea could look like as a real,
            revenue-generating product.
          </p>
          <h3 className="text-primary mb-3 text-xl font-semibold">THIS CALL IS PERFECT FOR:</h3>
          <ol className="text-muted-foreground list-outside list-disc space-y-2 pl-5 text-lg">
            <li>
              Creators and coaches with a{" "}
              <span className="text-foreground font-bold">loyal audience or client base</span> who want to productize
              their expertise.
            </li>
            <li>
              Entrepreneurs who are ready to{" "}
              <span className="text-foreground font-bold">build a platform or SaaS tool</span> around a proven niche or
              pain point.
            </li>
            <li>
              Founders looking for a partner to{" "}
              <span className="text-foreground font-bold">handle the full product build</span> — from idea to launch.
            </li>
            <li>
              Experts who are tired of trading time for money and want to{" "}
              <span className="text-foreground font-bold">build something that scales.</span>
            </li>
            <li>
              Anyone who has <span className="text-foreground font-bold">proof of demand</span> and wants to turn it
              into a real, user-ready product.
            </li>
          </ol>
        </div>

        <Card className="grow overflow-hidden p-0">
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1Pv9HFlnb1TDkGY3linDe5k3NNV-cM_W6GxXzzGOdgckbVkHbq-PEQk83MhgMKQIase_Dq2CeV?gv=true"
            className="dark:invert"
            width="100%"
            height="100%"
            frameBorder="0"
          ></iframe>
        </Card>
      </div>
    </section>
  );
}
