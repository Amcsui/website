import type { EventSummary } from "@/utils/types";
import EventCard from "./EventCard";
import Headline from "./Headline";

type EventContainerProps = {
  title: string;
  events: EventSummary[];
};

export default function EventContainer({ title, events }: EventContainerProps) {
  return (
    <div className="flex flex-col gap-6 max-w-[56rem] w-full items-center ">
      <Headline title={title} />
      <div className="flex flex-col gap-4 max-w-[53rem] w-full">
        {events.length > 0 ? (
          events.map((event) => <EventCard key={event.id} {...event} />)
        ) : (
          <p className="text-center text-on-surface-variant">رویدادی برای نمایش وجود ندارد.</p>
        )}
      </div>
    </div>
  );
}
