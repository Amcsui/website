"use client";
import Link from "next/link";
import Image from "next/image";
import LoginCircle from "@/assets/LoginCircle.svg";

export default function Page() {
  return (
    <div className="full_height w-1/3">
      <div className="relative flex items-center border-2 rounded-3xl border-primary-content overflow-visible ">
        <div className=" flex flex-col gap-5 w-7/12 z-10 p-10 pl-0">
          <h1 className="text-2xl font-bold mb-5">ورود به حساب کاربری</h1>

          <div className="flex flex-col gap-5 ">
            <label className="floating-label">
              <span style={{ background: "var(--background)" }}>
                نام کاربری
              </span>
              <input className="input input-lg rounded-xl w-full" type="text" />
            </label>

            <label className="floating-label">
              <span style={{ background: "var(--background)" }}>رمز عبور</span>
              <input
                className="input rounded-xl input-lg w-full"
                type="password"
              />
            </label>

            <button
              onClick={(e) => {
                alert("نام کاربری یا کلمه عبور اشتباه است");
              }}
              className="btn btn-primary rounded-xl"
            >
              ورود
            </button>
          </div>

          <p className="text-sm">
            رمز عبور خود را فراموش کرده‌اید؟
            <Link className="mx-2 link link-hover" href="/ForgetPassword">
              بازیابی رمز عبور
            </Link>
          </p>
        </div>

        <div className="absolute bottom-0 border-r border-primary-content -left-44  w-2/3  h-full">
          <Image
            alt="Login Icon"
            src={LoginCircle}
            className="block w-auto h-full"
          />
        </div>
      </div>
    </div>
  );
}
