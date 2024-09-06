export default function TextInput({ placeholder }: { placeholder?: string }) {
  return (
    <input className="outline-none h-14 rounded-2xl text-body-md border-[1px] border-outline-variant border-solid px-4"
      type="text"
      placeholder={placeholder} />
  )
}