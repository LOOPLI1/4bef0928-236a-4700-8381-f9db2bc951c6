import type { Metadata } from "next";
import Navbar from "@/components/blocks/navbar";
import ServicesAlternating from "@/components/blocks/services-alternating";
import ServiceAreaGrid from "@/components/blocks/service-area-grid";
import CtaSplit from "@/components/blocks/cta-split";
import FooterColumns from "@/components/blocks/footer-columns";

export const metadata: Metadata = {
  title: "Services | Excavator Hire Wollongong",
  description: "Excavator hire services in Wollongong including daily hire, self-operate hire, short-term rental, and local delivery across the Illawarra.",
};

export default function ServicesPage() {
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
      <ServicesAlternating
        heading="Excavator Hire Services in Wollongong"
        items={[
          {
            title: "Daily Excavator Hire",
            description: "Hire our excavator on a flexible day-rate basis. Ideal for construction companies, landscapers, and civil contractors who need reliable machinery without a long-term commitment.",
            image: "/images/services-daily.jpg",
            imageAlt: "Daily excavator hire in Wollongong",
          },
          {
            title: "Self-Operate Hire",
            description: "Take control of your project with self-operated excavator hire. Perfect for experienced operators who want a well-maintained machine on their own schedule.",
            image: "/images/services-self-operate.jpg",
            imageAlt: "Self-operate excavator hire Wollongong",
          },
          {
            title: "Short-Term Rental",
            description: "Need a machine for a day, a few days, or a week? We offer short-term rental options designed around the pace of trade and construction work.",
            image: "/images/services-short-term.jpg",
            imageAlt: "Short-term excavator rental Wollongong",
          },
          {
            title: "Local Delivery — Wollongong, Shellharbour & Kiama",
            description: "We deliver across the Illawarra including Wollongong, Shellharbour, Kiama, and surrounding suburbs so your equipment arrives on time and ready to work.",
            image: "/images/services-delivery.jpg",
            imageAlt: "Excavator delivery across Wollongong and Illawarra",
          },
        ]}
      />
      <ServiceAreaGrid
        heading="Excavator Hire Across the Illawarra"
        subheading="We deliver and support excavator hire throughout Wollongong and surrounding areas including Shellharbour, Kiama, and nearby suburbs."
        areas={[
          { name: "Wollongong", href: "/quote?area=Wollongong" },
          { name: "Shellharbour", href: "/quote?area=Shellharbour" },
          { name: "Kiama", href: "/quote?area=Kiama" },
          { name: "Dapto", href: "/quote?area=Dapto" },
          { name: "Albion Park", href: "/quote?area=Albion%20Park" },
          { name: "Fairy Meadow", href: "/quote?area=Fairy%20Meadow" },
        ]}
      />
      <CtaSplit
        heading="Reliable Hire Across the Illawarra Region"
        subheading="Whether you're working in Wollongong's city fringe, running a civil project in Shellharbour, or breaking ground near Kiama, we've got you covered. Our excavator is available for day-rate hire throughout the region with fast turnaround and no-nonsense service for trades and construction companies."
        cta="Enquire About Hire Rates"
        ctaHref="/quote"
        image="/images/services-area.jpg"
        imageAlt="Excavator hire available across Wollongong, Shellharbour and Kiama"
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
