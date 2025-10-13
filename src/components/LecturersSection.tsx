import Image from "next/image";
import type { FC } from "react";
import SectionTitle from "./SectionTitle";

export type Lecturer = {
  id: number | string;
  name: string;
  description: string;
  imageUrl?: string;
};

// Props for the entire section
type LecturersSectionProps = {
  title: string;
  lecturers: Lecturer[];
};

const LecturerBadge: FC<Omit<Lecturer, "id">> = ({ name, description, imageUrl }) => (
  <div className="flex items-center gap-3 rounded-full border border-outline bg-primary-container p-2 pr-5 transition-transform hover:scale-105">
    {imageUrl && (
      <div className="avatar">
        <div className="w-12 rounded-full">
          <Image src={imageUrl} alt={name} width={48} height={48} />
        </div>
      </div>
    )}
    <div className="flex flex-col items-start">
      <p className="font-bold text-label-lg text-on-primary-container">{name}</p>
      <p className="text-label-sm text-on-primary-container/80">{description}</p>
    </div>
  </div>
);

const LecturersSection: FC<LecturersSectionProps> = ({ title, lecturers }) => {
  return (
    <section>
      <SectionTitle title={title} />

      <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
        {lecturers.map((lecturer) => (
          // CHANGED key to use the unique lecturer.id
          <LecturerBadge key={lecturer.id} {...lecturer} />
        ))}
      </div>
    </section>
  );
};

export default LecturersSection;
