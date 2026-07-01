import type { Metadata } from "next";
import Navbar from "@/components/blocks/navbar";
import AboutSplit from "@/components/blocks/about-split";
import AboutStats from "@/components/blocks/about-stats";
import CtaBanner from "@/components/blocks/cta-banner";
import FooterColumns from "@/components/blocks/footer-columns";

export const metadata: Metadata = {
  title: "About | Excavator Hire Wollongong",
  description: "Excavator Hire Wollongong is a small, locally operated rental business serving tradies and construction firms across the Illawarra region.",
};

export default function AboutPage() {
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
        ctaHref="/contact"
      />
      <AboutSplit
        heading="Local Excavator Hire You Can Count On"
        body="Excavator Hire Wollongong is a small, locally operated rental business serving tradies and construction firms across the Illawarra region. Our equipment is trade-maintained, ready to work daily, and available on a straightforward day-rate hire basis. We keep things simple so you can focus on getting the job done."
        image="/images/about.jpg"
        imageAlt="Excavator Hire Wollongong — local Illawarra rental company"
        stats={[
          { value: "Local", label: "Wollongong Based" },
          { value: "Daily", label: "Equipment Readiness" },
          { value: "100%", label: "Fully Insured" },
        ]}
      />
      <AboutStats
        heading="Excavator Hire Built for the Illawarra"
        items={[
          { value: "Wollongong", label: "Home Base" },
          { value: "7 Days", label: "A-Week Availability" },
          { value: "100%", label: "Fully Insured" },
        ]}
      />
      <CtaBanner
        heading="Need a Reliable Excavator for Your Next Job?"
        subheading="We're available Monday to Saturday, 7am–5pm. Call us or submit an enquiry and we'll get back to you fast."
        cta="Get a Free Quote"
        ctaHref="/contact"
      />
      <FooterColumns
        logo="/images/logo.png"
        blurb="Excavator Hire Wollongong provides flexible day-rate excavator rental to tradies and construction firms across Wollongong, Shellharbour, Kiama and the Illawarra region."
        email="info@excavatorhirewollongong.com.au"
        phone="02 XXXX XXXX"
        columns={[
          {
            heading: "Pages",
            links: [
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
              { href: "/contact", label: "Contact" },
            ],
          },
          {
            heading: "Service Areas",
            links: [
              { href: "/service-areas/wollongong", label: "Wollongong" },
              { href: "/service-areas/shellharbour", label: "Shellharbour" },
              { href: "/service-areas/kiama", label: "Kiama" },
              { href: "/service-areas/dapto", label: "Dapto" },
              { href: "/service-areas/albion-park", label: "Albion Park" },
              { href: "/service-areas/fairy-meadow", label: "Fairy Meadow" },
            ],
          },
        ]}
        copyright="© 2026 Excavator Hire Wollongong. All rights reserved."
      />
    </>
  );
}
