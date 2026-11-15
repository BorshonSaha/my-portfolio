import type { Certificate } from "@/types";
import Section from "@/components/ui/Section";
import CertificateCard from "./CertificateCard";

export default function Certifications({ certificates }: { certificates: Certificate[] }) {
  return (
    <Section
      id="certifications"
      title="Certifications"
      intro="Preview a certificate here, or open the original in Google Drive."
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((c) => (
          <li key={c.id} className="min-w-0">
            <CertificateCard certificate={c} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
