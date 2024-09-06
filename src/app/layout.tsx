import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_Arabic } from "next/font/google";
import Image from "next/image";
import Logo from "../assets/logo.svg"
import '@fontsource/lalezar';
import Link from "next/link";


const vazir = Noto_Sans_Arabic({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "AMCSUI",
  description: "academic association of mathematics & computer sciences university of Isfahan",
  icons: {
    icon: "/logo.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={vazir.className + " relative cursor-default"}>
        <div className="h-[90vh] w-screen gradient absolute top-0 left-0 -z-10"></div>
        <div className="flex flex-col items-center w-full gap-4 lg:gap-12 pt-8 md:pt-12 pb-6 px-4 md:px-8 lg:px-0 m-auto">
          <div className="w-full max-w-[54rem]">
            <Link href="/">
              <Image src={Logo} alt="amcsui logo" />
            </Link>
          </div>
          {children}
        </div>
        <br />
        <br />
      </body>
    </html>
  );
}
