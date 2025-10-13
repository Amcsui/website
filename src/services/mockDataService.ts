import { EventStatus, type EventSummary, type EventDetails } from "@/utils/types";

class MockDataService {
  private events: EventSummary[] = [];
  private detailedEvents: Map<string, EventDetails> = new Map();

  constructor() {
    this.generateAllMockData();
  }

  private generateAllMockData() {
    const mockSummaries: EventSummary[] = [
      {
        id: "iut-cpc-2023",
        title: "مسابقه برنامه‌نویسی دانشگاه صنعتی اصفهان",
        desc: "بزرگترین مسابقه برنامه‌نویسی دانشجویی در اصفهان، فرصتی برای محک زدن مهارت‌ها و رقابت با بهترین‌ها.",
        status: EventStatus.done,
        imgSrc: "/images/event-poster.png",
        href: "/events/iut-cpc-2023",
      },
      {
        id: "sci-city-event",
        title: "فستیوال علمی سای‌سیتی",
        desc: "یک رویداد هیجان‌انگیز و جذاب برای علاقه‌مندان به علم و فناوری با کارگاه‌های عملی و سخنرانی‌های الهام‌بخش.",
        status: EventStatus.ongoing,
        imgSrc: "/images/sci-city-poster.jpeg",
        href: "/events/sci-city-event",
      },
      {
        id: "ai-workshop-2025",
        title: "کارگاه هوش مصنوعی پیشرفته",
        desc: "کارگاه تخصصی دو روزه با تمرکز بر آخرین پیشرفت‌ها در یادگیری عمیق و شبکه‌های عصبی.",
        status: EventStatus.upcoming,
        imgSrc: "/images/ai-poster.jpeg",
        href: "/events/ai-workshop-2025",
      },
    ];

    this.events = mockSummaries;

    // 1. IUT CPC 2023
    this.detailedEvents.set("iut-cpc-2023", {
      id: "iut-cpc-2023",
      banner: {
        title: "مسابقه برنامه‌نویسی دانشگاه صنعتی اصفهان",
        subtitle: "بهترین اتفاق جهان در حال رخ دادن است.",
        imageUrl: "/images/event-poster.png",
        imageAlt: "IUT CPC 2023 Poster",
        details: [
          { icon: "users", text: "مجازی و حضوری" },
          { icon: "calendar", text: "۲۲ فروردین ۱۴۰۳" },
          { icon: "clock", text: "ساعت ۱۶ تا ۱۸" },
          { icon: "dollar", text: "۲۰۰ هزارتومان" },
          { icon: "pin", text: ["دانشگاه اصفهان، دانشکده ریاضی،", "تالار خوارزمی"] },
        ],
        buttonText: "ثبت نام",
        description:
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
      },
      lecturers: [
        { id: 1, name: "دکتر رضایی", description: "متخصص الگوریتم", imageUrl: "/images/avatar.jpg" },
        { id: 2, name: "مهندس اکبری", description: "توسعه‌دهنده ارشد", imageUrl: "/images/avatar.jpg" },
      ],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      requirements: ["آشنایی با یکی از زبان‌های پایتون، جاوا یا C", "اندکی مغز تمرین داده شده"],
      attachments: [
        { id: 1, text: "پیوست شماره ۱", href: "#" },
        { id: 2, text: "پیوست شماره ۲", href: "#" },
      ],
    });

    // 2. Sci-City Event
    this.detailedEvents.set("sci-city-event", {
      id: "sci-city-event",
      banner: {
        title: "فستیوال علمی سای‌سیتی",
        subtitle: "جایی که علم و سرگرمی به هم می‌رسند.",
        imageUrl: "/images/sci-city-poster.jpeg",
        imageAlt: "Sci-City Festival Poster",
        details: [
          { icon: "users", text: "حضوری" },
          { icon: "calendar", text: "۱۵ تا ۱۸ آبان ۱۴۰۴" },
          { icon: "clock", text: "ساعت ۹ صبح تا ۶ عصر" },
          { icon: "dollar", text: "رایگان برای عموم" },
          { icon: "pin", text: "مرکز همایش‌های علمی شهر" },
        ],
        buttonText: "مشاهده برنامه‌ها",
        description:
          "فستیوال سای‌سیتی یک رویداد چهار روزه پر از آزمایش‌های علمی، کارگاه‌های تعاملی و نمایش‌های شگفت‌انگیز برای تمام سنین است. به ما بپیوندید و دنیای علم را کشف کنید.",
      },
      lecturers: [
        { id: 1, name: "پروفسور حسینی", description: "فیزیکدان کوانتوم", imageUrl: "/images/avatar.jpg" },
        { id: 2, name: "خانم دکتر احمدی", description: "زیست‌شناس مولکولی", imageUrl: "/images/avatar.jpg" },
        { id: 3, name: "مهندس جوادی", description: "مخترع و کارآفرین", imageUrl: "/images/avatar.jpg" },
      ],
      videoUrl: "https://www.youtube.com/embed/6-dZEM2-n5E", // A sample science video
      requirements: ["کنجکاوی و علاقه به یادگیری", "انرژی برای یک روز پر از هیجان"],
      attachments: [
        { id: 1, text: "برنامه کامل رویداد", href: "#" },
        { id: 2, text: "نقشه محل برگزاری", href: "#" },
      ],
    });

    // 3. AI Workshop 2025
    this.detailedEvents.set("ai-workshop-2025", {
      id: "ai-workshop-2025",
      banner: {
        title: "کارگاه هوش مصنوعی پیشرفته",
        subtitle: "آینده را با یادگیری عمیق بسازید.",
        imageUrl: "/images/ai-poster.jpeg",
        imageAlt: "AI Workshop Poster",
        details: [
          { icon: "users", text: "آنلاین و مجازی" },
          { icon: "calendar", text: "۵ و ۶ اسفند ۱۴۰۴" },
          { icon: "clock", text: "ساعت ۱۴ تا ۲۰" },
          { icon: "dollar", text: "۱,۵۰۰,۰۰۰ تومان" },
          { icon: "pin", text: "پلتفرم اسکای‌روم" },
        ],
        buttonText: "ثبت نام در کارگاه",
        description:
          "این کارگاه تخصصی شما را با جدیدترین تکنیک‌های شبکه‌های عصبی و یادگیری عمیق آشنا می‌کند. این دوره برای دانشجویان و متخصصانی طراحی شده است که به دنبال ارتقای مهارت‌های خود در حوزه هوش مصنوعی هستند.",
      },
      lecturers: [
        { id: 1, name: "دکتر محمدی", description: "محقق هوش مصنوعی", imageUrl: "/images/avatar.jpg" },
        { id: 2, name: "مهندس نادری", description: "متخصص بینایی ماشین", imageUrl: "/images/avatar.jpg" },
      ],
      videoUrl: "https://www.youtube.com/embed/aircAruvnKk", // A sample AI video
      requirements: ["آشنایی مقدماتی با پایتون", "درک مفاهیم اولیه یادگیری ماشین", "لپتاپ با حداقل ۸ گیگابایت رم"],
      attachments: [
        { id: 1, text: "سرفصل‌های کامل دوره", href: "#" },
        { id: 2, text: "منابع پیش‌نیاز", href: "#" },
      ],
    });
  }

  public getEvents(): EventSummary[] {
    return this.events;
  }

  public getEventById(id: string): EventDetails | undefined {
    if (this.detailedEvents.has(id)) {
      return this.detailedEvents.get(id);
    }

    // Fallback for safety, though it shouldn't be needed for the defined events.
    const summary = this.events.find((e) => e.id === id);
    if (!summary) return undefined;

    return {
      id: summary.id,
      banner: {
        title: summary.title,
        subtitle: "جزئیات این رویداد به زودی اضافه می‌شود.",
        imageUrl: summary.imgSrc,
        imageAlt: summary.title,
        details: [],
        buttonText: "اطلاعات بیشتر",
        description: summary.desc,
      },
      lecturers: [],
      videoUrl: "",
      requirements: [],
      attachments: [],
    };
  }
}

const mockDataService = new MockDataService();
export default mockDataService;
