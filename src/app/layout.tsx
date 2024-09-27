import "./globals.css";
import type { Metadata } from "next";
import { Lalezar, Noto_Sans_Arabic } from "next/font/google";
import Image from "next/image";
import Logo from "../assets/logo.svg"
import Link from "next/link";


const noto = Noto_Sans_Arabic({ subsets: ["arabic"] })
const lalezar = Lalezar({ subsets: ["arabic"], weight: ["400"], variable: "--font-lalezar" })

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
      <body className={noto.className + " relative cursor-default " + lalezar.variable}>
        <div className="flex flex-col items-center w-full gap-4 lg:gap-12 pt-8 pb-6 px-4 md:px-8 lg:px-0 m-auto">
          <div className="w-full max-w-[54rem]">
            <Link href="/" className="size-16 block">
              <Image src={Logo} alt="amcsui logo" className="size-full" />
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
