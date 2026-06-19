"use client"

import { useEffect, useState } from "react"

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Studio", href: "#studio" },
  { label: "Systems", href: "#systems" },
  { label: "Contact", href: "#contact" },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const [clock, setClock] = useState("")

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      setClock(
        now.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "UTC",
        }),
      )
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="flex items-center justify-between border-b border-border bg-background/80 px-4 py-3 backdrop-blur-md md:px-8">
        <a
          href="#top"
          className="font-mono text-xs uppercase tracking-[0.25em] text-foreground"
        >
          Bad Star<span className="align-super text-[0.6em]">®</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground md:block">
          UTC {clock}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="font-mono text-xs uppercase tracking-[0.2em] text-foreground md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-b border-border bg-background md:hidden">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-border px-4 py-5 font-mono text-sm uppercase tracking-[0.2em] text-foreground last:border-b-0"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
