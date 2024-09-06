import { MouseEventHandler, ReactNode } from "react";

export default function FilledButton(
  { children, color = "primary", onClick, }:
    { children: ReactNode, color?: 'primary' | 'tertiary', onClick?: MouseEventHandler<HTMLButtonElement> }) {
  return (
    <button onClick={onClick} className={`h-10 px-8 rounded-xl text-label-lg text-on-primary ${color === 'primary' ? "bg-primary" : "bg-tertiary"}`}>
      {children}
    </button >
  )
}