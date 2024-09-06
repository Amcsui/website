export default function Headline({ title, align = "center" }: { title: string, align?: "center" | "right" }) {
  return (
    align === "center" ?
      <div className="flex gap-8 w-full items-center">
        <span className="h-[1px] bg-[--outline-variant] grow"></span>
        <span className="text-head-xs font-lalezar">{title}</span>
        <span className="h-[1px] bg-[--outline-variant] grow"></span>
      </div>
      : <div className="flex gap-8 w-full items-center">
        <span className="text-[22px] font-lalezar">{title}</span>
        <span className="h-[1px] bg-[--outline-variant] grow"></span>
      </div>
  )
}