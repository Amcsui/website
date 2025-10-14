import type { FC } from "react";

type SectionTitleProps = {
  title: string;
};

const SectionTitle: FC<SectionTitleProps> = ({ title }) => {
  return <h2 className="font-lalezar text-head-sm text-on-surface mb-6 text-right">{title}</h2>;
};

export default SectionTitle;
