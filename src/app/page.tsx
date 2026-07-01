import type { Metadata } from "next";
import Navbar from "@/components/blocks/navbar";
import HeroSplit from "@/components/blocks/hero-split";
import ServicesGrid from "@/components/blocks/services-grid";
import TrustBadges from "@/components/blocks/trust-badges";
import CtaBanner from "@/components/blocks/cta-banner";
import FooterColumns from "@/components/blocks/footer-columns";

export const metadata: Metadata = {
  title: "Excavator Hire Wollongong",
  description: "Day-rate excavator rental for tradies and construction companies across Wollongong, Shellharbour, Kiama and surrounding suburbs.",
};

export default function HomePage() {
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
      <HeroSplit
        headline="Excavator Hire in Wollongong — Ready When You Are"
        subheadline="Day-rate excavator rental for tradies and construction companies across Wollongong, Shellharbour, Kiama and surrounding suburbs. Reliable machinery, no fuss."
        cta="Get a Free Quote"
        ctaHref="/quote"
        image="/images/hero.jpg"
        imageAlt="Excavator available for hire in Wollongong"
        trustBadge="Trusted by trades and construction firms across the Illawarra"
      />
      <ServicesGrid
        heading="What We Offer"
        subheading="Simple, flexible excavator hire built around the way trades work. Pick your day rate, get on site, get the job done."
        items={[
          {
            icon: "shovel",
            title: "Daily Excavator Hire",
            description: "Self-operate hire available on a flexible day-rate basis to suit your project schedule",
          },
          {
            icon: "hard-hat",
            title: "Trade & Construction Rental",
            description: "Reliable machinery ready for construction companies, landscapers, and civil contractors",
          },
          {
            icon: "map-pin",
            title: "Local Wollongong Delivery",
            description: "Servicing Wollongong, Shellharbour, Kiama and nearby suburbs with prompt availability",
          },
        ]}
      />
      <TrustBadges
        items={[
          { icon: "shield-check", label: "Fully Insured" },
          { icon: "wrench", label: "Trade-Maintained Equipment" },
          { icon: "calendar", label: "7 Days a Week Availability" },
          { icon: "map-pin", label: "Local Illawarra Business" },
          { icon: "tag", label: "Simple Day-Rate Pricing" },
        ]}
      />
      <CtaBanner
        heading="Ready to Book Your Excavator?"
        subheading="Get in touch today and we'll confirm availability for your project across Wollongong, Shellharbour, Kiama and surrounding areas."
        cta="Get a Free Quote"
        ctaHref="/quote"
      />
      <FooterColumns
        logo="/images/logo.png"
        blurb="Excavator Hire Wollongong provides flexible day-rate excavator rental to tradies and construction firms across Wollongong, Shellharbour, Kiama and the Illawarra region."
        email="info@excavatorhirewollongong.com.au"
        phone="+61 468 054 253"
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
