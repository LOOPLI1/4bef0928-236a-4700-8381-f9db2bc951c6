import { Phone, ShieldCheck, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface QuoteFormProps {
  heading: string;
  subheading: string;
  formCta: string;
  phone: string;
  services: string[];
  areas: string[];
  /** Pre-selected service, e.g. from `?service=` */
  service?: string;
  /** Pre-filled service area / suburb, e.g. from `?area=` */
  area?: string;
}

const fieldClass =
  "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm";

export default function QuoteForm({
  heading,
  subheading,
  formCta,
  phone,
  services,
  areas,
  service = "",
  area = "",
}: QuoteFormProps) {
  const telHref = `tel:${phone.replace(/\s+/g, "")}`;

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

        <form className="mt-10 flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" type="text" autoComplete="name" required />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" type="tel" autoComplete="tel" required />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" autoComplete="email" required />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="service">Service needed</Label>
              <select
                key={service}
                id="service"
                name="service"
                defaultValue={service}
                className={cn(fieldClass, "cursor-pointer")}
              >
                <option value="">Select a service…</option>
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="area">Service area / suburb</Label>
              <Input
                key={area}
                id="area"
                name="area"
                type="text"
                list="area-options"
                defaultValue={area}
                placeholder="e.g. Wollongong"
              />
              <datalist id="area-options">
                {areas.map((a) => (
                  <option key={a} value={a} />
                ))}
              </datalist>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="details">Project details</Label>
            <Textarea
              id="details"
              name="details"
              rows={5}
              placeholder="Tell us about your job — the type of work, preferred dates, and the size of machine you need."
            />
          </div>
          <Button type="submit" size="lg" className="w-full sm:w-fit">
            {formCta}
          </Button>
        </form>

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
