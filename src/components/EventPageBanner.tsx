import Image from "next/image";
import type { FC, ReactNode } from "react";

type DetailItem = {
  icon: ReactNode;
  text: string | string[];
};

type EventPageBannerProps = {
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt: string;
  details: DetailItem[];
  buttonText: string;
  onButtonClick: () => void;
  description: string;
};

const EventPageBanner: FC<EventPageBannerProps> = ({ title, subtitle, imageUrl, imageAlt, details, buttonText, onButtonClick, description }) => {
  return (
    <div className="gradient py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card lg:card-side bg-surface shadow-xl border border-outline overflow-hidden">
          {/* Image section */}
          <figure className="lg:w-2/5">
            <Image src={imageUrl} alt={imageAlt} width={500} height={700} className="w-full h-full object-cover" />
          </figure>

          {/* Details section  */}
          <div className="card-body lg:w-3/5 p-8 md:p-10">
            <h1 className="font-lalezar text-on-surface text-head-md md:text-head-lg !leading-tight">{title}</h1>
            <p className="mt-2 text-on-surface-variant text-body-md">{subtitle}</p>

            {/* List of event details with icons */}
            <div className="mt-6 space-y-4">
              {details.map((item, index) => (
                <div key={index} className="flex items-center gap-x-4">
                  {/* Icon color now uses the 'primary' theme color */}
                  <div className="text-primary">{item.icon}</div>
                  <div className="flex flex-col text-body-md font-medium text-on-surface-variant">
                    {Array.isArray(item.text) ? item.text.map((line, lineIndex) => <span key={lineIndex}>{line}</span>) : <span>{item.text}</span>}
                  </div>
                </div>
              ))}
            </div>

            {/* Action button */}
            <div className="card-actions mt-8">
              <button onClick={onButtonClick} className="btn btn-primary btn-wide text-title-sm">
                {buttonText}
              </button>
            </div>
          </div>
        </div>

        {/* Description text below the card */}
        <div className="mt-8 max-w-5xl mx-auto">
          <p className="text-on-surface-variant text-body-lg leading-relaxed text-center md:text-right">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default EventPageBanner;
