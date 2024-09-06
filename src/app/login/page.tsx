import FilledButton from "@/components/FilledButton";
import PasswordInput from "@/components/PasswordInput";
import TextInput from "@/components/TextInput";

export default function Login() {
  return (
    <div className="w-full max-w-[47rem] flex border-[1px] border-outline border-solid rounded-2xl">
      <div className="flex-grow flex flex-col gap-8 p-12">
        <h1 className="text-head-sm">ورود به حساب کاربری</h1>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <TextInput placeholder="نام کاربری ..." />
            <PasswordInput placeholder="رمز عبور ..." />
          </div>
          <FilledButton>ورود</FilledButton>
        </div>
      </div>
      <div className="bg-primary-container w-[19rem]">

      </div>
    </div>
  )
}