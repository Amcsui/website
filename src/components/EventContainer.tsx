import { EventStatus } from "@/utils/types";
import EventCard from "./EventCard";
import Headline from "./Headline";

export default function EventContainer({ title }: { title: string }) {
  return (
    <div className="flex flex-col gap-6 max-w-[56rem] w-full items-center ">
      <Headline title={title} />
      <div className="flex flex-col gap-4 max-w-[53rem]">
        <EventCard
          title="سای سیتی"
          desc="سای سیتی یک رویداد بسیار هیجان انگیز و باحال است سای سیتی یک رویداد بسیار هیجان انگیز و باحال است"
          status={EventStatus.ongoing}
          imgSrc=""
          href="#fsd" />
      </div>
    </div>
  )
}