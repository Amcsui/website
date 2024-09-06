import FilledButton from "./FilledButton";
import OutlineButton from "./OutlineButton";

export default function Navbar() {
  return (
    <nav className="flex gap-2 w-full max-w-[60rem] h-[4.5rem] justify-between bg-primary-container items-center pl-6 pr-12 rounded-3xl">
      <ul className="flex gap-8 text-body-lg">
        <li>آموزش</li>
        <li>رویداد</li>
        <li>همکاری</li>
        <li>درباره ما</li>
      </ul>
      <div className="flex gap-4">
        <OutlineButton>ورود</OutlineButton>
        <FilledButton color="tertiary">ثبت نام</FilledButton>
      </div>
    </nav>
  )
}