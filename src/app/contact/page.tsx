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
        ctaHref="/contact"
      />
      <ContactForm
        heading="Get in Touch — Excavator Hire Enquiries Welcome"
        subheading="Ready to book or want to check availability? Call us or fill in the form below and we'll get back to you fast. We're available Monday to Saturday, 7am–5pm."
        formCta="Send Your Enquiry"
      />
      <ContactMap
        heading="Find Us"
        address="Wollongong, NSW 2500"
        phone="02 XXXX XXXX"
        email="info@excavatorhirewollongong.com.au"
        hours={[
          { day: "Monday – Friday", time: "7:00am – 5:00pm" },
          { day: "Saturday", time: "7:00am – 5:00pm" },
          { day: "Sunday", time: "Closed" },
        ]}
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53000!2d150.8931!3d-34.4278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b131559e2f53bd5%3A0x1a1e4f1d6e0d5bce!2sWollongong%20NSW%202500!5e0!3m2!1sen!2sau!4v1680000000000"
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
