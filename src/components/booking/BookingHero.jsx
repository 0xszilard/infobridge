import { Badge } from "../ui/badge";
import { Calendar, Shield, Star, Users } from "lucide-react";

export default function BookingHero() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="container mx-auto max-w-4xl space-y-6 text-center">
        <Badge variant="secondary" className="mx-auto w-fit">
          <Calendar className="mr-2 h-3 w-3" />
          Free Strategy Session
        </Badge>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          Book Your Free{" "}
          <span className="from-primary to-primary/60 bg-linear-to-r bg-clip-text text-transparent">
            Project Consultation
          </span>
        </h1>
        <p className="text-muted-foreground mx-auto max-w-3xl text-lg md:text-xl">
          Get expert advice on your web development project. We'll discuss your goals, provide technical
          recommendations, and create a custom roadmap for success.
        </p>

        {/* Trust Indicators */}
        <div className="flex items-center justify-center gap-8 pt-4">
          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>4.9/5 Client Rating</span>
          </div>
          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <Users className="h-4 w-4" />
            <span>30+ Projects Delivered</span>
          </div>
          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <Shield className="h-4 w-4" />
            <span>100% Confidential</span>
          </div>
        </div>
      </div>
    </section>
  );
}
