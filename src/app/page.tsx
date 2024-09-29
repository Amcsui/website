import Headline from "@/components/Headline";
import Image from "next/image";
import Hero from "../assets/hero.svg"
import Identity from "../assets/identity.svg"
import Branchess from "../assets/branches.svg"
import LinkedIn from "../assets/linkedin.svg"
import Telegram from "../assets/telegram.svg"
import Instagram from "../assets/instagram.svg"
import Location from "../assets/location.svg"

import ContentBranch from '../assets/branches/content.svg'
import HRBranch from '../assets/branches/hr.svg'
import TechnicalBranch from '../assets/branches/technical.svg'
import EducationBranch from '../assets/branches/education.svg'
import LogisticBranch from '../assets/branches/logistics.svg'
import BranchesHeader from "../assets/branches/header.svg"

export default function Home() {
  return (
    <main className="flex flex-col max-w-[54rem] w-full gap-[5rem]">
      <header className="flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-8 lg:gap-14">
        <h1 className="text-display-md text-center lg:text-right md:text-display-md lg:text-display-lg font-lalezar">
          <span>انجمن علمی </span><span className="text-tertiary">ریاضی</span>
          <span> و </span>
          <span className="text-primary">علوم کامپیوتر</span>
        </h1>
        <Image src={Hero} alt="hero" className="size-[16rem] lg:size-[17rem]" />
      </header>
      <div className="flex flex-col gap-6">
        <Headline title="هویت انجمن" />
        <div className="flex gap-10 relative">
          <Image src={Identity} alt="identity" height={140} className="absolute right-[-5.5rem] -z-10 top-16 md:static" />
          <div className="text-justify text-body-[15px] md:text-body-md leading-7 pr-10 pl-2 md:pr-0 md:pl-0">
            انجمن علمی ریکا گونه‌ای چندگانه از موجودیت‌هاست: یک نهاد
            <strong className="text-secondary font-bold"> داوطلبانه و قدردان </strong>
            برای تمام دانشجویان جوینده
            <strong className="text-secondary font-bold"> بی‌نهایت و فراتر از آن</strong>
            ؛ یک دانشگاه شبیه‌سازی شده درون دانشگاه با فضایی امن برای
            <strong className="text-secondary font-bold"> آزمون و خطای </strong>
            دانشجو و تمرکز به گسترش علم افراد؛
            شرکتی کوچک با محوریت توسعه فناوری، تفکر حل مسئله یادگیری فعالیت ساختارمند و مدیریت پروژه.
            اینجا، فضایی برای یادگیری مدیریت مسئولیته، دقیقا مثل یک کارگاه برای
            <strong className="text-secondary font-bold"> کسب و انتقال تجربه </strong>.
            در واقع یک انجمن، یک حلقه دانشجویی امیدواره.
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 lg:gap-16">
        <Headline title="شاخه‌های انجمن" />
        <div className="justify-center items-center gap-9 relative hidden lg:flex">
          <Image src={Branchess} alt="amcsui branches" className="w-40 md:w-72 z-10" />
          <div className="flex flex-col bg-[#e2d9f3] px-4 py-2 rounded absolute w-[360px] -top-4 left-11 pr-14">
            <div className="size-20 bg-background absolute -right-8 top-1 rounded-full"></div>
            <div className="font-lalezar">آموزش و مشاوره</div>
            <div className="text-body-sm">تدریس انواع حیطه‌های علمی و تخصصی؛ مشاوره‌ی علمی و آموزشی؛ نویسندگی در حوضه‌های ذکر شده</div>
          </div>
          <div className="flex flex-col bg-[#e2d9f3] px-4 py-2 rounded absolute w-[360px] top-27 -left-9 pr-14">
            <div className="size-20 bg-background absolute -right-8 top-1 rounded-full"></div>
            <div className="font-lalezar">تدارکات و اجرا</div>
            <div className="text-body-sm">بازو‌های اجرایی؛ تعیین، ‌تامین و پیگیری دریافت تدارکات؛ مدیریت منابع مالی و دارایی‌های انجمن</div>
          </div>
          <div className="flex flex-col bg-[#e2d9f3] px-4 py-2 rounded absolute w-[360px] -bottom-2 left-10 pr-14">
            <div className="size-20 bg-background absolute -right-8 top-1 rounded-full"></div>
            <div className="font-lalezar">منابع انسانی</div>
            <div className="text-body-sm">روابط عمومی با خارج از انجمن؛ جذب و توانمند‌سازی اعضا؛‌ گزارش نویسی؛‌ مدیریت شبکه‌های اجتماعی</div>
          </div>
          <div className="flex flex-col bg-[#e2d9f3] px-4 py-2 rounded absolute w-[360px] bottom-2 -right-4 pl-14">
            <div className="size-20 bg-background absolute -left-8 top-1 rounded-full"></div>
            <div className="font-lalezar">تولید محتوا</div>
            <div className="text-body-sm">تولید و ادیت محتوای متنی، گرافیکی، ویدیوئی و صوتی؛ تامین محتوای هنری (نقاشی، ساز و ... )</div>
          </div>
          <div className="flex flex-col bg-[#e2d9f3] px-4 py-2 rounded absolute w-[360px] top-9 -right-8 pl-14">
            <div className="size-20 bg-background absolute -left-8 top-1 rounded-full"></div>
            <div className="font-lalezar">توسعه فنی</div>
            <div className="text-body-sm">مهندسی نرم‌افزار و داده؛ توسعه وب (توسعه بک‌اند و فرانت‌اند)؛‌ آی‌تی؛‌ باقی مهارت‌های کامپیوتری</div>
          </div>
        </div>
        <div className="gap-x-3 gap-y-12 grid grid-cols-2 lg:hidden">
          <div className="col-span-2 flex justify-center items-center">
            <Image className="h-24" src={BranchesHeader} alt=""></Image>
          </div>
          <div className="bg-primary-container rounded-lg flex flex-col gap-2 px-3 pb-4 pt-12 relative">
            <div className="absolute -top-8 bg-background rounded-full size-[68px] left-0 right-0 mx-auto">
              <Image src={EducationBranch} alt="" />
            </div>
            <div className="font-lalezar text-center text-lg">آموزش و مشاوره</div>
            <div className="text-body-sm text-center text-pretty">تدریس انواع حیطه‌های علمی و تخصصی؛ مشاوره‌ی علمی و آموزشی؛ نویسندگی در حوضه‌های ذکر شده</div>
          </div>
          <div className="bg-primary-container rounded-lg flex flex-col gap-2 px-3 pb-4 pt-12 relative">
            <div className="absolute -top-8 bg-background rounded-full size-[68px] left-0 right-0 mx-auto">
              <Image src={ContentBranch} alt="" />
            </div>
            <div className="font-lalezar text-center text-lg">تولید محتوا</div>
            <div className="text-body-sm text-center text-pretty">تولید و ادیت محتوای متنی، گرافیکی، ویدیوئی و صوتی؛ تامین محتوای هنری (نقاشی، ساز و ... )</div>
          </div>
          <div className="bg-primary-container rounded-lg flex flex-col gap-2 px-3 pb-4 pt-12 relative">
            <div className="absolute -top-8 bg-background rounded-full size-[68px] left-0 right-0 mx-auto">
              <Image src={TechnicalBranch} alt="" />
            </div>
            <div className="font-lalezar text-center text-lg">توسعه فنی</div>
            <div className="text-body-sm text-center text-pretty">مهندسی نرم‌افزار و داده؛ توسعه وب (توسعه بک‌اند و فرانت‌اند)؛‌ آی‌تی؛‌ باقی مهارت‌های کامپیوتری</div>
          </div>
          <div className="bg-primary-container rounded-lg flex flex-col gap-2 px-3 pb-4 pt-12 relative">
            <div className="absolute -top-8 bg-background rounded-full size-[68px] left-0 right-0 mx-auto">
              <Image src={HRBranch} alt="" />
            </div>
            <div className="font-lalezar text-center text-lg">منابع انسانی</div>
            <div className="text-body-sm text-center text-pretty">روابط عمومی با خارج از انجمن؛ جذب و توانمند‌سازی اعضا؛‌ گزارش نویسی؛‌ مدیریت شبکه‌های اجتماعی</div>
          </div>
          <div className="bg-primary-container rounded-lg flex flex-col gap-2 px-3 pb-4 pt-12 relative">
            <div className="absolute -top-8 bg-background rounded-full size-[68px] left-0 right-0 mx-auto">
              <Image src={LogisticBranch} alt="" />
            </div>
            <div className="font-lalezar text-center text-lg">تدارکات و اجرا</div>
            <div className="text-body-sm text-center text-pretty">بازو‌های اجرایی؛ تعیین، ‌تامین و پیگیری دریافت تدارکات؛ مدیریت منابع مالی و دارایی‌های انجمن</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <Headline title="کلاب‌ها" align="right" />
        <div className="flex gap-4 flex-wrap">
          <ClubCard title="بوک کلاب" img="/book-club.jpeg">
            در بوک کلاب ریکا، ما یک جمع دوستانه هستیم که با هدف ترویج کتاب‌خوانی، کتاب‌هایی با موضوعات علمی و یا داستانی با پیشنهاد و معرفی خود اعضا مطالعه می‌کنیم و از هر منظری بحث و تحلیل می‌کنیم.
            <br />
            اینجا حتی اگر کتابی را مطالعه نکرده‌اید اما به آن علاقه‌مندید، می‌توانید برای مشاهده ارائه دیگران و شرکت در بحث به ما بپیوندید.
          </ClubCard>
          <ClubCard title="دیسکاشن کلاب" img="/discussion-club.jpeg">
            در دیسکاشن کلاب ریکا، ما با جمعی دانشجویی و دوستانه تلاش می‌کنیم بدون هیچ هزینه‌ای سطح زبان هم رو تقویت کنیم!
            <br />
            اینجا فضاییه که تمامی علاقه‌مندان زبان و مباحثه، از هر سطح زبان، هر هفته دور هم جمع شده و درباره موضوعات مختلف و پیشنهادی هم، به زبان انگلیسی گفت‌وگو می‌کنیم تا ارتباط بگیریم و برای یادگیری هم رو به چالش بکشیم.
          </ClubCard>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <Headline title="شورای مرکزی" align="right" />
        <div className="flex flex-wrap gap-2">
          <Name name="امین مسعودی" year="۱۴۰۱ علوم کامپیوتر" position="دبیر" />
          <Name name="فرزانه سلیمی" year="۱۴۰۱ علوم کامپیوتر" position="نائب دبیر" />
          <Name name="حسنا سلطان‌الکتابی" year="۱۴۰۱ علوم کامپیوتر" />
          <Name name="داوود نصرتی" year="۱۴۰۱ علوم کامپیوتر" />
          <Name name="فاطمه غلامی" year="۱۴۰۰ علوم کامپیوتر" />
          <Name name="محمد ملائی" year="۱۴۰۱ علوم کامپیوتر" />
          <Name name="صفورا خسروی" year="۱۴۰۲ علوم کامپیوتر" />
          <Name name="امین عبدالله پور" year="۱۴۰۱ علوم کامپیوتر" />
          <Name name="یگانه رستگاری" year="۱۴۰۱ علوم کامپیوتر" />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Headline title="پیوند‌ها" align="right" />
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <SocialLink href="http://telegram.me/AMCSUI" title="کانال تلگرام اصلی" img={Telegram} />
          <SocialLink href="https://www.linkedin.com/company/amcsui" title="صفحه لینکدین" img={LinkedIn} />
          <SocialLink href="https://www.instagram.com/amcsui/" title="صفحه اینستاگرام" img={Instagram} />
          <SocialLink href="http://telegram.me/AMCSUIClubs" title="کانال تلگرام کلاب‌ها" img={Telegram} />
          <SocialLink href="https://t.me/AMCSUIChat" title="گروه تلگرام همکاری" img={Telegram} />
          <SocialLink href="http://telegram.me/AMCSSup" title="گروه تلگرام پشتیبانی" img={Telegram} />
        </div>
      </div>
      <div className="text-body-sm">
        <hr className="mb-6" />
        <a className="flex gap-2 text-primary mb-2"
          href="https://www.google.com/maps/place/%D8%AF%D8%A7%D9%86%D8%B4%DA%A9%D8%AF%D9%87+%D8%B9%D9%84%D9%88%D9%85+%D8%B1%DB%8C%D8%A7%D8%B6%DB%8C+%D9%88+%D8%A2%D9%85%D8%A7%D8%B1%E2%80%AD/@32.6055282,51.6611043,20.49z/data=!4m6!3m5!1s0x3fbc364a8b35410d:0x2783304226fe5e6!8m2!3d32.6056696!4d51.6610391!16s%2Fg%2F11g8vq2l82?entry=ttu">
          <Image src={Location} width={24} height={24} alt="location" />
          دانشگاه اصفهان، دانشکدۀ ریاضی و آمار، طبقۀ همکف
        </a>
        <div className="font-light text-on-background-variant">
          © کلیه‌ی حقوق این سایت متعلق به
          <span className="text-primary"> انجمن علمی ریاضی و علوم کامپیوتر دانشگاه اصفهان </span>
          است.
        </div>
      </div>
    </main>
  );
}

const Name = ({ name, year, position }: { name: string, year: string, position?: string }) => {
  return (
    <div className="flex flex-col gap-1 px-3 py-2 basis-[48%] grow md:basis-auto md:max-w-[12.9rem] lg:max-w-max rounded-lg border min-w-[10.4rem] w-[10.4rem]">
      <div className="text-[16px]">
        {name}
      </div>
      <div className="flex justify-between text-[11px] gap-1">
        <span className="font-light">{year}</span>
        <span className="text-primary">{position}</span>
      </div>
    </div>
  )
}

const SocialLink = ({ href, title, img }: { href: string, title: string, img: string }) => {
  return (
    <a href={href} className="flex basis-[100%] md:basis-[30%] gap-2 items-center rounded-lg border border-outline py-2 pl-4 pr-3">
      <Image src={img} alt={title} width={24} height={24} />
      <span className="text-label-md text-on-background-variant">{title}</span>
    </a>
  )
}

const ClubCard = ({ title, img, children }: { title: string, img: string, children?: React.ReactNode }) => {
  return <div className="flex flex-col md:flex-row max-w-[28rem] md:max-w-[45rem] m-auto gap-4 md:gap-8 py-4 px-6 rounded border shadow-sm">
    <img src={img} className="rounded hidden md:block" alt={title} width={150} height={195} />
    <img src={img} className="rounded block md:hidden mx-auto" alt={title} width={240} height={320} />
    <div className="flex flex-col gap-1">
      <div className="text-head-xs font-lalezar text-center md:text-right">{title}</div>
      <div className="leading-[26px] text-label-md text-justify px-4 md:px-0 pb-3">
        {children}
      </div>
    </div>
  </div>
}