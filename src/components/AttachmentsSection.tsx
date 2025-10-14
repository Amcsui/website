import { Download } from "lucide-react";
import type { FC } from "react";
import SectionTitle from "./SectionTitle";

// Type for a single attachment - ADDED a unique 'id'
export type Attachment = {
  id: number | string;
  text: string;
  href: string;
};

// Props for the section
type AttachmentsSectionProps = {
  title: string;
  attachments: Attachment[];
};

const AttachmentLink: FC<Omit<Attachment, "id">> = ({ text, href }) => (
  <a
    href={href}
    download
    className="flex items-center gap-3 rounded-full border border-outline bg-primary-container px-6 py-3 text-on-primary-container transition-shadow hover:shadow-md"
  >
    <Download size={20} />
    <span className="font-medium text-label-md">{text}</span>
  </a>
);

const AttachmentsSection: FC<AttachmentsSectionProps> = ({ title, attachments }) => {
  return (
    <section>
      <SectionTitle title={title} />
      {/*
       */}
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
        {attachments.map((attachment) => (
          <AttachmentLink key={attachment.id} {...attachment} />
        ))}
      </div>
    </section>
  );
};

export default AttachmentsSection;
