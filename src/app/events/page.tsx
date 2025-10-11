import EventCard from "@/components/EventCard";
import EventContainer from "@/components/EventContainer";
import { EventStatus } from "@/utils/types";
import React from "react";

export default function page() {
  return (
    <>
      <div>page</div>
      <EventCard title="hello" status={EventStatus.done} desc="nice" imgSrc="none" href="url" />
      <EventContainer title="jooon" />
    </>
  );
}
