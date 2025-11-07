"use client";

import { useEffect, useState } from "react";
import { Button } from "./button";
import { Card, CardContent, CardFooter, CardHeader } from "./card";
import Link from "next/link";
import { Cookie } from "lucide-react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./dialog";
import { Switch } from "./switch";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";

const CONSENT_KEY = "consent-v2";

const FormSchema = z.object({
  necessary: z.boolean().default(true),
  functionality: z.boolean().default(true),
  analytics: z.boolean().default(true),
  personalization: z.boolean().default(true),
  ads: z.boolean().default(true),
});

function updateGoogleConsent(consent) {
  const gtag =
    window.gtag ||
    function () {
      window.dataLayer?.push(arguments);
    };

  gtag("consent", "update", {
    analytics_storage: consent.analytics ? "granted" : "denied",
    ad_storage: consent.ads ? "granted" : "denied",
    ad_user_data: consent.ads ? "granted" : "denied",
    ad_personalization: consent.ads ? "granted" : "denied",
    personalization_storage: consent.personalization ? "granted" : "denied",
    functionality_storage: consent.functionality ? "granted" : "denied",
    security_storage: "granted",
  });
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      necessary: true,
      functionality: true,
      analytics: true,
      personalization: true,
      ads: true,
    },
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem(CONSENT_KEY);
      if (saved) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  function onSubmit(data) {
    const c = {
      necessary: data.necessary,
      analytics: data.analytics,
      ads: data.ads,
      personalization: data.personalization,
      functionality: data.functionality,
    };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(c));
    updateGoogleConsent(c);
    setVisible(false);
  }

  return (
    <motion.div
      className="fixed right-0 bottom-0 z-50 w-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 1.5 }}
    >
      <Card className="fixed right-0 bottom-0 rounded-none md:right-5 md:bottom-5 md:max-w-md md:rounded-md">
        <CardHeader className="border-b-border flex flex-row items-end justify-between border-b">
          <h4 className="text-lg font-semibold">Our site uses cookies</h4>
          <Cookie />
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground my-3 text-sm">
            We use cookies to ensure you get the best experience on our website. For more information on how we use
            cookies, please see our cookie policy.
          </p>
          <p className="text-muted-foreground text-xs">
            By clicking Accept, you agree to our use of cookies.{" "}
            <Link href="/privacy" className="hover:underline">
              Learn more. <span className="sr-only">about our data handlign policies</span>
            </Link>
          </p>
        </CardContent>
        <CardFooter className="grid grid-cols-2 gap-4">
          <Button
            size="sm"
            type="button"
            onClick={() =>
              onSubmit({
                necessary: true,
                analytics: true,
                ads: true,
                personalization: true,
                functionality: true,
              })
            }
          >
            Accept All
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" variant="outline">
                More Options
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Notice</DialogTitle>
              </DialogHeader>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="mb-2 w-full space-y-2">
                  <FormField
                    control={form.control}
                    name="necessary"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between p-1">
                        <div className="space-y-0.5">
                          <FormLabel>Essential</FormLabel>
                          <FormDescription>
                            These cookies keep the website running smoothly and securely.
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch disabled checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="functionality"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between p-1">
                        <div className="space-y-0.5">
                          <FormLabel>Helpful Features</FormLabel>
                          <FormDescription>
                            They remember your preferences to make your experience easier.
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="analytics"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between p-1">
                        <div className="space-y-0.5">
                          <FormLabel>Insights</FormLabel>
                          <FormDescription>These show us how people use the site so we can improve it.</FormDescription>
                        </div>
                        <FormControl>
                          <Switch checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="personalization"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between p-1">
                        <div className="space-y-0.5">
                          <FormLabel>Tailored Experience</FormLabel>
                          <FormDescription>They adapt content to better match your interests.</FormDescription>
                        </div>
                        <FormControl>
                          <Switch checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="ads"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between p-1">
                        <div className="space-y-0.5">
                          <FormLabel>Relevant Offers</FormLabel>
                          <FormDescription>These help us show ads that are more useful to you.</FormDescription>
                        </div>
                        <FormControl>
                          <Switch checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <DialogFooter className="pt-3">
                    <Button type="submit">Save preferences</Button>
                  </DialogFooter>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
