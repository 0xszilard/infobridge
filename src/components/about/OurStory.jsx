import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { placeholder } from "@/assets";

export default function OurStory() {
  return (
    <section className="bg-muted/30 border-t px-4 py-16 md:px-6 md:py-20">
      <div className="container m-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                We started our agency after years of watching talented creators and experts get stuck — either
                overwhelmed by tech, burned by flaky freelancers, or frustrated by bloated agencies that didn’t get
                their vision.
              </p>
              <p>
                Our mission is simple: help content-driven businesses build smart, scalable digital products — without
                wasting time, money, or momentum. We prioritize clarity, speed, and outcomes over buzzwords and bloat.
              </p>
              <p>
                Since launching, we’ve grown into a team of big team of product strategists, designers, and developers —
                helping creators launch over 30+ platforms and SaaS tools, raise over $450k+, and unlock new revenue
                streams at scale.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/booking">Start Your Project</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#team">Meet Our Team</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-lg">
              <Image
                src={
                  "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ||
                  placeholder
                }
                width={900}
                height={900}
                alt="Team working together"
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
