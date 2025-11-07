import React from "react";

export default function AboutStats() {
  return (
    <section className="bg-muted/30 border-t px-4 py-16 md:px-6 md:py-20">
      <div className="container m-auto">
        <div className="mb-12 space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Track Record</h2>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="space-y-2 text-center">
            <div className="text-primary text-4xl font-bold">30+</div>
            <div className="text-muted-foreground text-sm">Projects Delivered</div>
          </div>
          <div className="space-y-2 text-center">
            <div className="text-primary text-4xl font-bold">$450k+</div>
            <div className="text-muted-foreground text-sm">Revenue Generated</div>
          </div>
          <div className="space-y-2 text-center">
            <div className="text-primary text-4xl font-bold">2.5x</div>
            <div className="text-muted-foreground text-sm">Average ROI Increase</div>
          </div>
          <div className="space-y-2 text-center">
            <div className="text-primary text-4xl font-bold">98%</div>
            <div className="text-muted-foreground text-sm">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
