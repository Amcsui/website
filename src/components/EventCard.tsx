import { EventStatus } from "@/utils/types";
import Link from "next/link";

export default function EventCard({ title, status, desc, imgSrc, href }: { title: string; status: EventStatus; desc: string; imgSrc: string; href: string }) {
  return (
    <div className="flex gap-6 px-4 py-3 bg-surface rounded-lg border border-solid border-outline">
      {/* Image container remains the same */}
      <div className="flex-shrink-0 w-[17rem] h-[10rem] bg-secondary-container rounded-[0.25rem]">
        <img src={imgSrc} className="w-full h-full object-cover" alt="Event Image" />
      </div>

      <div className="flex flex-col flex-1 gap-3">
        <div className="flex items-center gap-2 py-2 border-b border-solid border-outline-variant">
          <h3 className="flex-grow text-title-md">{title}</h3>
          <span className="flex-shrink-0 text-label-sm">{status}</span>
        </div>

        <div className="flex-grow text-body-md">{desc}</div>

        <Link href={href} className="self-start text-sm cursor-pointer text-primary">
          بیشتر
        </Link>
      </div>
    </div>
  );
}
