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
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53000!2d150.8931!3d-34.4278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b131559e2f53bd5%3A0x1a1e4f1d6e0d5bce!2sWollongong%20NSW%202500!5e0!3m2!1sen!2sau!4v1680000000000"
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
