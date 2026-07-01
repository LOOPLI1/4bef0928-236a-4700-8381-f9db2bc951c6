import { icons, type LucideProps } from "lucide-react";

interface DynamicIconProps extends LucideProps {
  name: string;
}

// Accept kebab-case, snake_case, spaced or PascalCase names and resolve to a
// Lucide icon key (which are all PascalCase, e.g. "map-pin" -> "MapPin").
function toPascalCase(name: string) {
  return name
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const key = toPascalCase(name);
  const Icon = icons[key as keyof typeof icons] ?? icons[name as keyof typeof icons];

  if (!Icon) return null;

  return <Icon {...props} />;
}
