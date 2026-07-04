"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { Phone, ShieldCheck, Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface QuoteFormProps {
  heading: string;
  subheading: string;
  phone: string;
}

export default function QuoteForm({
  heading,
  subheading,
  phone,
}: QuoteFormProps) {
  const telHref = `tel:${phone.replace(/\s+/g, "")}`;

  // Read the `?area=` suburb from the URL on the client. Done here rather than
  // via server-side searchParams so the page stays statically exportable.
  const [area, setArea] = useState("");
  useEffect(() => {
    const value = new URLSearchParams(window.location.search).get("area");
    if (value) setArea(value);
  }, []);

  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {heading}
          </h1>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            {subheading}
          </p>
          {area && (
            <div className="mt-6 flex justify-center">
              <Badge variant="outline" className="gap-1.5 px-3 py-1.5 text-sm font-medium">
                <MapPin className="size-4 text-primary" />
                Quote for {area}
              </Badge>
            </div>
          )}
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>Prefer to talk now?</span>
            <a href={telHref} className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline">
              <Phone className="size-4" />
              {phone}
            </a>
          </div>
        </div>

        <div className="mt-10">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/GadtGo8qku1LxqkfSfGy"
            id="inline-GadtGo8qku1LxqkfSfGy"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Excavator Hire"
            data-height="506"
            data-layout-iframe-id="inline-GadtGo8qku1LxqkfSfGy"
            data-form-id="GadtGo8qku1LxqkfSfGy"
            title="Excavator Hire"
            className="h-[506px] w-full rounded-[10px] border-none"
          />
          <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
        </div>

        <div className="mt-10 flex flex-col justify-center gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:gap-8">
          <span className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-primary" />
            No-obligation quote
          </span>
          <span className="flex items-center gap-2">
            <Clock className="size-4 text-primary" />
            Fast response
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="size-4 text-primary" />
            Local Illawarra team
          </span>
        </div>
      </div>
    </section>
  );
}
