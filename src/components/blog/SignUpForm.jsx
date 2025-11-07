"use client";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2, Send } from "lucide-react";
import { useActionState, useEffect, useState } from "react";
import { sendWaitlist } from "@/app/actions";

export default function EmailSignupForm({ signedUp }) {
  const [state, formAction, isPending] = useActionState(sendWaitlist, null);
  const [submitted, setSubmitted] = useState(signedUp);

  useEffect(() => {
    if (signedUp) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSubmitted(true);
    }
  }, [signedUp, state]);

  return (
    <div>
      {submitted ? (
        <div className="animate-appear bg-card/20 text-muted-foreground rounded-md border px-4 py-2 text-center font-medium backdrop-blur-lg delay-50">
          Thank you for signing up!
        </div>
      ) : (
        <>
          <form noValidate action={formAction} className="flex w-full gap-4">
            <Input id="email" name="email" type="email" className="h-10 max-w-lg" placeholder="your@email.com" />

            <Button disabled={isPending} type="submit">
              {isPending ? <Loader2 size={14} className="mr-1.5" /> : <Send size={14} className="mr-1.5" />}
              Subscribe
            </Button>
          </form>
          {state?.errors?.email && (
            <p className="text-destructive-foreground mt-1 ml-2 text-xs">{state.errors.email}</p>
          )}
        </>
      )}
    </div>
  );
}
