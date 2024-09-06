import { MouseEventHandler, ReactNode } from "react";

export default function OutlineButton(
  { children, onClick }:
    { children: ReactNode, onClick?: MouseEventHandler<HTMLButtonElement> }
) {
  return (
    <button onClick={onClick} className="text-label-lg text-primary h-10 px-8 rounded-xl border-[1px] border-solid border-outline">
      {children}
    </button>
  )
}