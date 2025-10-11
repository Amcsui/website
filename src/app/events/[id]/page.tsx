"use client";

import EventPageBanner from "@/components/EventPageBanner";
import { Calendar, Clock, MapPin, Users, CircleDollarSign } from "lucide-react";

export default function EventDetailPage() {
  const eventData = {
    title: "مسابقه برنامه‌نویسی دانشگاه صنعتی اصفهان",
    subtitle: "بهترین اتفاق جهان در حال رخ دادن است.",
    imageUrl: "/images/event-poster.png", // Place image in public/images/
    imageAlt: "IUT CPC 2023 Poster",
    details: [
      {
        icon: <Users size={24} />,
        text: "مجازی و حضوری",
      },
      {
        icon: <Calendar size={24} />,
        text: "۲۲ فروردین ۱۴۰۳",
      },
      {
        icon: <Clock size={24} />,
        text: "ساعت ۱۶ تا ۱۸",
      },
      {
        icon: <CircleDollarSign size={24} />,
        text: "۲۰۰ هزارتومان",
      },
      {
        icon: <MapPin size={24} />,
        text: ["دانشگاه اصفهان، دانشکده ریاضی،", "تالار خوارزمی"],
      },
    ],
    buttonText: "ثبت نام",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد. کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می‌طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد.",
  };

  const handleRegistration = () => {
    console.log("Registration button clicked!");
    alert("شما برای ثبت نام هدایت می‌شوید...");
  };

  return (
    <main>
      <EventPageBanner
        title={eventData.title}
        subtitle={eventData.subtitle}
        imageUrl={eventData.imageUrl}
        imageAlt={eventData.imageAlt}
        details={eventData.details}
        buttonText={eventData.buttonText}
        onButtonClick={handleRegistration}
        description={eventData.description}
      />
    </main>
  );
}
