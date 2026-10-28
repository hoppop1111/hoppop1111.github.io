import { Mail, Phone } from "lucide-react";
import type { ContactKind } from "@/types/portfolio";
import { GithubIcon, KaggleIcon, LineIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

export function ContactIcon({ kind, className = "h-5 w-5" }: { kind: ContactKind; className?: string }) {
  switch (kind) {
    case "email":
      return <Mail className={className} />;
    case "phone":
      return <Phone className={className} />;
    case "line":
      return <LineIcon className={className} />;
    case "linkedin":
      return <LinkedinIcon className={className} />;
    case "github":
      return <GithubIcon className={className} />;
    case "kaggle":
      return <KaggleIcon className={className} />;
  }
}

/** Display name for a contact channel. */
export const CONTACT_NAMES: Record<ContactKind, string> = {
  email: "Email",
  phone: "Phone",
  line: "LINE",
  linkedin: "LinkedIn",
  github: "GitHub",
  kaggle: "Kaggle",
};
