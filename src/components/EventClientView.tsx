"use client";

import type { EventDetails, DetailIcon } from "@/utils/types";
import EventPageBanner from "@/components/EventPageBanner";
import LecturersSection from "@/components/LecturersSection";
import RequirementsSection from "@/components/RequirementsSection";
import AttachmentsSection from "@/components/AttachmentsSection";
import SectionTitle from "@/components/SectionTitle";
import { Calendar, Clock, MapPin, Users, CircleDollarSign } from "lucide-react";

// Helper to map icon names from the service to actual components
const getIcon = (iconName: DetailIcon, size = 24) => {
  const iconMap = {
    users: <Users size={size} />,
    calendar: <Calendar size={size} />,
    clock: <Clock size={size} />,
    dollar: <CircleDollarSign size={size} />,
    pin: <MapPin size={size} />,
  };
  return iconMap[iconName];
};

type EventClientViewProps = {
  eventData: EventDetails;
};

export default function EventClientView({ eventData }: EventClientViewProps) {
  // Client-side logic like button clicks remains here
  const handleRegistration = () => {
    console.log(`Registering for event: ${eventData.id}`);
    alert("شما برای ثبت نام هدایت می‌شوید...");
  };

  // Transform banner details to include the icon components
  const bannerWithIcons = {
    ...eventData.banner,
    details: eventData.banner.details.map((detail) => ({
      ...detail,
      icon: getIcon(detail.icon),
    })),
  };

  return (
    <>
      <EventPageBanner {...bannerWithIcons} onButtonClick={handleRegistration} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="space-y-12 md:space-y-16">
          {eventData.lecturers.length > 0 && <LecturersSection title="سخنرانان" lecturers={eventData.lecturers} />}
          {eventData.videoUrl && (
            <section>
              <SectionTitle title="ویدیو معرفی" />
              <div className="aspect-video w-full overflow-hidden rounded-2xl border-2 border-outline shadow-lg">
                <iframe
                  className="w-full h-full"
                  src={eventData.videoUrl}
                  title="Event Introduction Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </section>
          )}
          {eventData.requirements.length > 0 && <RequirementsSection title="پیش‌نیازها" items={eventData.requirements} />}
          {eventData.attachments.length > 0 && <AttachmentsSection title="پیوست‌ها" attachments={eventData.attachments} />}
        </div>
      </div>
    </>
  );
}
