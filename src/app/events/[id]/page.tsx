import mockDataService from "@/services/mockDataService";
import { notFound } from "next/navigation";
import EventClientView from "@/components/EventClientView";

// This is an async Server Component
export default async function EventDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;

  // Data is fetched securely on the server before the page is rendered.
  const eventData = mockDataService.getEventById(id);

  if (!eventData) {
    notFound();
  }

  // Render the client component and pass the fetched data as a prop.
  return (
    <main>
      <EventClientView eventData={eventData} />
    </main>
  );
}
