"use client";

import { useEffect, useState, useRef } from "react";
import { animate } from "motion";
import { Button } from "./button";
import { Card, CardHeader, CardContent, CardFooter } from "./card";
import { Cookie } from "lucide-react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  const bannerRef = useRef(null);

  // check if we've already got a choice
  useEffect(() => {
    if (localStorage.getItem("cookie-consent") === null) {
      setShow(true);
    }
  }, []);

  // run Motion One animation on mount
  useEffect(() => {
    if (show && bannerRef.current) {
      animate(
        bannerRef.current,
        { opacity: [0, 1], transform: ["translateY(50px)", "translateY(0px)"] },
        { duration: 0.4, easing: "ease-out", delay: 1.5 }
      );
    }
  }, [show]);

  const choose = (grant) => {
    localStorage.setItem("cookie-consent", grant ? "granted" : "denied");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div ref={bannerRef} className="fixed right-0 bottom-0 z-50 max-w-md md:right-5 md:bottom-5" style={{ opacity: 0 }}>
      <Card className="rounded-t-md rounded-b-none md:rounded-md">
        <CardHeader className="flex items-center justify-between border-b px-4">
          <h4 className="text-lg font-semibold">We use cookies</h4>
          <Cookie />
        </CardHeader>
        <CardContent className="text-muted-foreground px-4 text-sm">
          <p>
            We use cookies to ensure the best experience. More details in our{" "}
            <a href="/privacy" className="underline">
              Cookie Policy
            </a>
            .
          </p>
        </CardContent>
        <CardFooter className="grid grid-cols-2 gap-4 px-4">
          <Button size="sm" onClick={() => choose(true)}>
            Accept All
          </Button>
          <Button size="sm" variant="outline" onClick={() => choose(false)}>
            Only Necessary
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
