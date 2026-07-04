import Script from "next/script";

interface ContactFormProps {
  heading: string;
  subheading: string;
  formCta: string;
}

export default function ContactForm({ heading, subheading }: ContactFormProps) {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            {subheading}
          </p>
        </div>
        <div className="mt-12">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/GadtGo8qku1LxqkfSfGy"
            className="h-[506px] w-full rounded-[10px] border-none"
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
          />
        </div>
      </div>
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </section>
  );
}
