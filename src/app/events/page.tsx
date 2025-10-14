import EventContainer from "@/components/EventContainer";
import mockDataService from "@/services/mockDataService";
import { EventStatus } from "@/utils/types";

export default function EventsPage() {
  //  Fetch all event data from the service
  const allEvents = mockDataService.getEvents();

  //  Filter the events into different categories
  const ongoingEvents = allEvents.filter((event) => event.status === EventStatus.ongoing);
  const upcomingEvents = allEvents.filter((event) => event.status === EventStatus.upcoming);
  const doneEvents = allEvents.filter((event) => event.status === EventStatus.done);

  return (
    <main className="flex flex-col items-center gap-12 py-10 px-4">
      {/*  Pass the filtered arrays to each EventContainer */}
      <EventContainer title="رویدادهای در حال برگزاری" events={ongoingEvents} />
      <EventContainer title="رویدادهای آینده" events={upcomingEvents} />
      <EventContainer title="رویدادهای گذشته" events={doneEvents} />
    </main>
  );
}
