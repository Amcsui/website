import React from "react";
import Image from "next/image";
import Logo from "../assets/logo.svg";
import Link from "next/link";
import OutlineButton from "@/components/OutlineButton";
import FilledButton from "@/components/FilledButton";

function Navbar() {
  const links = [
    { title: "آموزش", link: "/learn" },
    { title: "رویداد ها", link: "/events" },
    { title: "درباره ما", link: "/#about_us" },
  ];
  return (
    <div className="navbar border rounded-3xl pr-6 pl-6 max-w-[60rem]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu gap-2 menu-sm dropdown-content bg-background rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links.map((link, index) => (
              <Link key={index} href={link.link}>
                <li>{link.title}</li>
              </Link>
            ))}
          </ul>
        </div>
        <ul className="hidden lg:flex gap-8 px-5">
          {links.map((link, index) => (
            <Link key={index} href={link.link}>
              <li>{link.title}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="navbar-center ">
        <Link href={"/"} className="btn btn-link">
          <Image src={Logo} alt="amcsui logo" className="size-full" />
        </Link>
      </div>
      <div className="navbar-end gap-4">
        <OutlineButton href={"/login"}>ورود/عضویت</OutlineButton>
      </div>
    </div>
  );
}

export default Navbar;
