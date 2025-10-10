import Headline from "@/components/Headline";
import Image from "next/image";
import Identity from "../assets/identity.svg";

export default function AboutUs() {
  return (
    <div id="about_us" className="flex flex-col gap-6">
      <Headline title="هویت انجمن" />
      <div className="flex gap-10 relative">
        <Image
          src={Identity}
          alt="identity"
          height={140}
          className="absolute right-[-5.5rem] top-16 md:static"
        />
        <div className="text-justify text-body-[15px] md:text-body-md leading-7 pr-10 pl-2 md:pr-0 md:pl-0">
          انجمن علمی ریکا گونه‌ای چندگانه از موجودیت‌هاست: یک نهاد
          <strong className="text-secondary font-bold">
            {" "}
            داوطلبانه و قدردان{" "}
          </strong>
          برای تمام دانشجویان جوینده
          <strong className="text-secondary font-bold">
            {" "}
            بی‌نهایت و فراتر از آن
          </strong>
          ؛ یک دانشگاه شبیه‌سازی شده درون دانشگاه با فضایی امن برای
          <strong className="text-secondary font-bold"> آزمون و خطای </strong>
          دانشجو و تمرکز به گسترش علم افراد؛ شرکتی کوچک با محوریت توسعه فناوری،
          تفکر حل مسئله یادگیری فعالیت ساختارمند و مدیریت پروژه. اینجا، فضایی
          برای یادگیری مدیریت مسئولیته، دقیقا مثل یک کارگاه برای
          <strong className="text-secondary font-bold">
            {" "}
            کسب و انتقال تجربه{" "}
          </strong>
          . در واقع یک انجمن، یک حلقه دانشجویی امیدواره.
        </div>
      </div>
    </div>
  );
}
