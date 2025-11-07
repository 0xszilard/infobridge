import { Card, CardContent } from "../ui/card";
import { cookies } from "next/headers";
import EmailSignupForm from "./SignUpForm";

export default async function NewsLetter() {
  const cookieStore = await cookies();
  const signedUp = cookieStore.get("waitlist")?.value === "true";

  return (
    <section className="bg-muted/30 border-t px-4 py-16 md:px-6">
      <div className="container m-auto">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 md:p-12">
            <div className="mx-auto max-w-2xl space-y-6 text-center">
              <h2 className="text-3xl font-bold">Stay Updated with Development Insights</h2>
              <p className="text-lg opacity-90">
                Get weekly articles, tutorials, and industry insights delivered to your inbox. Join 500+ developers and
                business owners.
              </p>
              <EmailSignupForm signedUp={signedUp} />

              <p className="text-sm opacity-75">No spam. Unsubscribe anytime.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
