// The icon name as a string, which we'll map to a component
export type DetailIcon = "users" | "calendar" | "clock" | "dollar" | "pin";

export enum EventStatus {
  ongoing = "ongoing",
  upcoming = "upcoming",
  done = "done",
}

export type Lecturer = {
  id: number | string;
  name: string;
  description: string;
  imageUrl?: string;
};

export type Attachment = {
  id: number | string;
  text: string;
  href: string;
};

// Type for event cards on the list page
export interface EventSummary {
  id: string;
  title: string;
  desc: string;
  status: EventStatus;
  imgSrc: string;
  href: string;
}

// Type for the full event details on the [id] page
export interface EventDetails {
  id: string;
  banner: {
    title: string;
    subtitle: string;
    imageUrl: string;
    imageAlt: string;
    details: Array<{ icon: DetailIcon; text: string | string[] }>;
    buttonText: string;
    description: string;
  };
  lecturers: Lecturer[];
  videoUrl: string;
  requirements: string[];
  attachments: Attachment[];
}
