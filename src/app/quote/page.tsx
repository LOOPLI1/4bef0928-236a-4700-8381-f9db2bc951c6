import type { Metadata } from "next";
import Navbar from "@/components/blocks/navbar";
import QuoteForm from "@/components/blocks/quote-form";
import FooterColumns from "@/components/blocks/footer-columns";

const PHONE = "+61 468 054 253";

export const metadata: Metadata = {
  title: "Get a Free Quote | Excavator Hire Wollongong",
  description:
    "Request a free, no-obligation excavator hire quote for your job across Wollongong, Shellharbour, Kiama and the Illawarra region.",
};

export default async function QuotePage({
  searchParams,
}: {
  searchParams: Promise<{ area?: string | string[] }>;
}) {
  const params = await searchParams;
  const area = typeof params.area === "string" ? params.area : "";

  return (
    <>
      <Navbar
        logo="/images/logo.png"
        logoHref="/"
        links={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
          { href: "/services", label: "Services" },
          { href: "/contact", label: "Contact" },
        ]}
        cta="Get a Free Quote"
        ctaHref="/quote"
      />
      <QuoteForm
        heading="Get a Free Excavator Hire Quote"
        subheading="Tell us about your job and we'll get back to you fast with a no-obligation day-rate quote for excavator hire across the Illawarra."
        phone={PHONE}
        area={area}
      />
      <FooterColumns
        logo="/images/logo.png"
        blurb="Excavator Hire Wollongong provides flexible day-rate excavator rental to tradies and construction firms across Wollongong, Shellharbour, Kiama and the Illawarra region."
        email="info@excavatorhirewollongong.com.au"
        phone={PHONE}
        columns={[
          {
            heading: "Pages",
            links: [
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
              { href: "/contact", label: "Contact" },
              { href: "/quote", label: "Get a Quote" },
            ],
          },
          {
            heading: "Service Areas",
            links: [
              { href: "/quote?area=Wollongong", label: "Wollongong" },
              { href: "/quote?area=Shellharbour", label: "Shellharbour" },
              { href: "/quote?area=Kiama", label: "Kiama" },
              { href: "/quote?area=Dapto", label: "Dapto" },
              { href: "/quote?area=Albion%20Park", label: "Albion Park" },
              { href: "/quote?area=Fairy%20Meadow", label: "Fairy Meadow" },
            ],
          },
        ]}
        copyright="© 2026 Excavator Hire Wollongong. All rights reserved."
      />
    </>
  );
}
