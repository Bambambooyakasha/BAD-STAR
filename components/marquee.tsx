import type { ReactNode } from "react"

export function Marquee({
  children,
  slow = false,
}: {
  children: ReactNode
  slow?: boolean
}) {
  return (
    <div className="flex w-full overflow-hidden">
      <div
        className={`flex shrink-0 items-center whitespace-nowrap ${
          slow ? "animate-[marquee-slow]" : "animate-[marquee]"
        }`}
        style={{ animation: slow ? "marquee 60s linear infinite" : "marquee 36s linear infinite" }}
        aria-hidden={false}
      >
        {children}
      </div>
      <div
        className="flex shrink-0 items-center whitespace-nowrap"
        style={{ animation: slow ? "marquee 60s linear infinite" : "marquee 36s linear infinite" }}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  )
}
