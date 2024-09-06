import { MouseEventHandler, ReactNode } from "react";

export default function FilledTonalButton(
  { children, onClick }:
    { children: ReactNode, onClick?: MouseEventHandler<HTMLButtonElement> }) {
  return (
    <button onClick={onClick} className="text-label-lg text-primary h-10 px-8 rounded-xl bg-primary-container">
      {children}
    </button>
  )
}