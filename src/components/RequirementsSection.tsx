import type { FC } from "react";
import SectionTitle from "./SectionTitle";

type RequirementsSectionProps = {
  title: string;
  items: string[];
};

const RequirementsSection: FC<RequirementsSectionProps> = ({ title, items }) => {
  return (
    <section>
      <SectionTitle title={title} />
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-x-3 text-body-md text-on-surface-variant">
            <span className="h-2 w-2 rounded-full bg-primary"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RequirementsSection;
