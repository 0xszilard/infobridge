import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { signUp } from "@/app/actions";
import { cookies } from "next/headers";

export default async function NewsLetter() {
  const cookieStore = await cookies();

  const newsletter = cookieStore.has("newsletter");

  return (
    <section className="bg-muted/30 border-t px-4 py-16 md:px-6">
      <div className="container m-auto">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 md:p-12">
            <div className="mx-auto max-w-2xl space-y-6 text-center">
              <h2 className="text-3xl font-bold">Stay Updated with Development Insights</h2>
              <p className="text-lg opacity-90">
                Get weekly articles, tutorials, and industry insights delivered to your inbox. Join 5,000+ developers
                and business owners.
              </p>
              {newsletter ? (
                "Signed Up"
              ) : (
                <form action={signUp} className="mx-auto flex max-w-md gap-2">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="dark:placeholder:text-foreground/80"
                  />
                  <Button type="submit" variant="secondary">
                    Subscribe
                  </Button>
                </form>
              )}
              <p className="text-sm opacity-75">No spam. Unsubscribe anytime.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
