import { MapPin, Phone, Mail, Clock } from "lucide-react";

interface BusinessHour {
  day: string;
  time: string;
}

interface ContactMapProps {
  heading: string;
  address: string;
  phone: string;
  email: string;
  hours: BusinessHour[];
  mapEmbedUrl: string;
}

export default function ContactMap({
  heading,
  address,
  phone,
  email,
  hours,
  mapEmbedUrl,
}: ContactMapProps) {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-8 text-left">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {heading}
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <MapPin className="size-5 shrink-0 text-primary" />
              <span className="text-base text-muted-foreground">{address}</span>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="size-5 shrink-0 text-primary" />
              <a
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="text-base text-muted-foreground transition-colors hover:text-primary"
              >
                {phone}
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="size-5 shrink-0 text-primary" />
              <a
                href={`mailto:${email}`}
                className="text-base text-muted-foreground transition-colors hover:text-primary"
              >
                {email}
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Clock className="size-5 shrink-0 text-primary" />
              <span className="text-base font-semibold text-foreground">Business Hours</span>
            </div>
            <ul className="flex flex-col gap-1">
              {hours.map((hour) => (
                <li key={hour.day} className="flex justify-between text-sm text-muted-foreground">
                  <span>{hour.day}</span>
                  <span>{hour.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="aspect-square w-full overflow-hidden rounded-xl lg:aspect-auto">
          <iframe
            title={heading}
            src={mapEmbedUrl}
            className="h-full min-h-[400px] w-full border-0"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
