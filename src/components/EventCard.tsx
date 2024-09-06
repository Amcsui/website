import { EventStatus } from "@/utils/types";
import Link from "next/link";

export default function EventCard(
  { title, status, desc, imgSrc, href }:
    { title: string, status: EventStatus, desc: string, imgSrc: string, href: string }) {
  return (
    <div className="flex gap-6 px-4 py-3 bg-surface rounded-lg border-[1px] border-outline border-solid">
      <div className="w-[17rem] h-[10rem] bg-secondary-container rounded-[0.25rem]">
        <img src={imgSrc} className="w-full h-full" alt="Event Image" />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 py-2 border-b-[1px] border-outline-variant border-solid">
          <h3 className="flex-grow text-title-md">{title}</h3>
          <span className="flex-shrink-0 text-label-sm">{status}</span>
        </div>
        <div className="flex-grow text-body-md">{desc}</div>
        <Link href={href} className="cursor-pointer text-body-sm text-left text-primary">بیشتر</Link>
      </div>
    </div>
  )
}