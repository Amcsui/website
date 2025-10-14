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
        id: "vast",
        title: "رویداد انتقال تجربه وست",
        desc: "رویدادی برای معرفی مشاغل حوزه تکنولوژی و فناوری",
        status: EventStatus.done,
        imgSrc: "/images/event-poster.png",
        href: "/events/vast",
      },
      {
        id: "sci-city-event",
        title: " مسابقه سای‌سیتی",
        desc: "یک رویداد هیجان‌انگیز و جذاب برای علاقه‌مندان به علم و فناوری با کارگاه‌های عملی و سخنرانی‌های الهام‌بخش.",
        status: EventStatus.ongoing,
        imgSrc: "/images/sci-city-poster.jpeg",
        href: "/events/sci-city-event",
      },
      {
        id: "latex-workshop",
        title: "کارگاه زبان لاتک",
        desc: "کارگاه تخصصی آموزش زبان لاتک.",
        status: EventStatus.upcoming,
        imgSrc: "/images/ai-poster.jpeg",
        href: "/events/latex-workshop",
      },
    ];

    this.events = mockSummaries;

    // 1. IUT CPC 2023
    this.detailedEvents.set("vast", {
      id: "vast",
      banner: {
        title: "مسابقه برنامه‌نویسی دانشگاه صنعتی اصفهان",
        subtitle: "بهترین اتفاق جهان در حال رخ دادن است.",
        imageUrl: "/images/event-poster.png",
        imageAlt: "IUT CPC 2023 Poster",
        details: [
          { icon: "users", text: "مجازی و حضوری" },
          { icon: "calendar", text: "خرداد ۱۴۰۳" },
          { icon: "clock", text: "ساعت 9 تا 13" },
          { icon: "dollar", text: "100 هزارتومان" },
          { icon: "pin", text: ["دانشگاه اصفهان، جنب ساختمان مرکزی", "تالار پیامبر اعظم"] },
        ],
        buttonText: "ثبت نام",
        description:
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
      },
      lecturers: [
        { id: 1, name: "دکتر علی شریفی زارچی", description: "متخصص الگوریتم و بیوانفورماتیک", imageUrl: "/images/avatar.jpg" },
        { id: 2, name: " امیرحسن گلشنی", description: "توسعه‌دهنده ارشد", imageUrl: "/images/avatar.jpg" },
        { id: 3, name: "  میثم مدنی", description: "توسعه‌دهنده ارشد", imageUrl: "/images/avatar.jpg" },
        { id: 4, name: "امیر حاجی زاده", description: " هم بنیانگذار و متخصص منابع انسانی", imageUrl: "/images/avatar.jpg" },
      ],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      requirements: [],
      attachments: [
        { id: 1, text: "پیوست شماره ۱", href: "#" },
        { id: 2, text: "پیوست شماره ۲", href: "#" },
      ],
    });

    // 2. Sci-City Event
    this.detailedEvents.set("sci-city-event", {
      id: "sci-city-event",
      banner: {
        title: "مسابقه سای‌سیتی",
        subtitle: "جایی که علم و سرگرمی به هم می‌رسند.",
        imageUrl: "/images/sci-city-poster.jpeg",
        imageAlt: "Sci-City Festival Poster",
        details: [
          { icon: "users", text: "حضوری" },
          { icon: "calendar", text: "۱۵ تا ۱۸ آبان ۱۴۰۴" },
          { icon: "clock", text: "ساعت ۹ صبح تا ۶ عصر" },
          { icon: "dollar", text: "رایگان برای عموم" },
          { icon: "pin", text: "دانشکده اقتصاد" },
        ],
        buttonText: "مشاهده برنامه‌ها",
        description:
          "فستیوال سای‌سیتی یک رویداد چهار روزه پر از آزمایش‌های علمی، کارگاه‌های تعاملی و نمایش‌های شگفت‌انگیز برای تمام سنین است. به ما بپیوندید و دنیای علم را کشف کنید.",
      },
      lecturers: [],
      videoUrl: "https://www.youtube.com/embed/6-dZEM2-n5E", // A sample science video
      requirements: ["کنجکاوی و علاقه به یادگیری", "انرژی برای یک روز پر از هیجان"],
      attachments: [
        { id: 1, text: "برنامه کامل رویداد", href: "#" },
        { id: 2, text: "نقشه محل برگزاری", href: "#" },
      ],
    });

    // 3. AI Workshop 2025
    this.detailedEvents.set("latex-workshop", {
      id: "latex-workshop",
      banner: {
        title: "کارگاه زبان لاتک",
        subtitle: "",
        imageUrl: "/images/latex-poster.jpeg",
        imageAlt: "Poster",
        details: [
          { icon: "users", text: "حضوری و مجازی" },
          { icon: "calendar", text: "۵ و ۶ اسفند 1403" },
          { icon: "clock", text: "ساعت ۱۴ تا ۲۰" },
          { icon: "dollar", text: "۱۵۰۰۰۰ تومان" },
          { icon: "pin", text: "سایت دانشکده ریاضی" },
        ],
        buttonText: "ثبت نام در کارگاه",
        description: "",
      },
      lecturers: [{ id: 1, name: "داوود نصرتی امیرآبادی", description: " دانشجوی کارشناسی علوم کامپیوتر ", imageUrl: "/images/avatar.jpg" }],
      videoUrl: "https://www.youtube.com/embed/aircAruvnKk", // A sample AI video
      requirements: ["درک مفاهیم اولیه بزنامه نویسی ", "لپتاپ با داشتن فایل های مورد نیاز لاتک"],
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
