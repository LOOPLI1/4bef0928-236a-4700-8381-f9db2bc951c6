import type { Metadata } from "next";
import Navbar from "@/components/blocks/navbar";
import ContactForm from "@/components/blocks/contact-form";
import ContactMap from "@/components/blocks/contact-map";
import FooterColumns from "@/components/blocks/footer-columns";

export const metadata: Metadata = {
  title: "Contact | Excavator Hire Wollongong",
  description: "Get in touch with Excavator Hire Wollongong. Ready to book or want to check availability? Call us or fill in the form below.",
};

export default function ContactPage() {
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
      <ContactForm
        heading="Get in Touch — Excavator Hire Enquiries Welcome"
        subheading="Ready to book or want to check availability? Call us or fill in the form below and we'll get back to you fast. We're available Monday to Saturday, 7am–5pm."
        formCta="Send Your Enquiry"
      />
      <ContactMap
        heading="Find Us"
        address="Wollongong, NSW 2500"
        phone="+61 468 054 253"
        email="info@excavatorhirewollongong.com.au"
        hours={[
          { day: "Monday – Friday", time: "7:00am – 5:00pm" },
          { day: "Saturday", time: "7:00am – 5:00pm" },
          { day: "Sunday", time: "Closed" },
        ]}
        mapEmbedUrl="https://maps.google.com/maps?q=NJB%20Landscapes&ll=-34.330568,150.901862&z=16&output=embed"
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
