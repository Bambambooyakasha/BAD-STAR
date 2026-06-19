import { Reveal } from "@/components/reveal"

const SOCIALS = [
  { label: "Instagram", href: "#" },
  { label: "Vimeo", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
]

export function ContactSection() {
  return (
    <section
      id="contact"
      className="px-4 py-12 md:px-8 md:py-20"
    >
      <Reveal>
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          (04) — Contact
        </p>
      </Reveal>

      <Reveal delay={80}>
        <h2 className="text-balance text-5xl font-bold uppercase leading-[0.88] tracking-[-0.03em] md:text-[9vw]">
          Let&apos;s build
          <br />
          something live
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-12">
        <Reveal delay={120} className="md:col-span-6">
          <a
            href="mailto:studio@badstar.studio"
            className="group inline-flex items-center gap-3 text-2xl font-bold tracking-[-0.01em] md:text-4xl"
          >
            studio@badstar.studio
            <span className="transition-transform group-hover:translate-x-2">
              &rarr;
            </span>
          </a>
          <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
            For commissions, installations, and collaborations. We work with
            artists, brands, architects, and cultural institutions worldwide.
          </p>
        </Reveal>

        <div className="md:col-span-3">
          <Reveal delay={160}>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Connect
            </p>
            <ul className="flex flex-col">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="group flex items-center justify-between border-b border-border py-3 font-mono text-xs uppercase tracking-[0.15em] text-foreground"
                  >
                    {social.label}
                    <span className="text-muted-foreground transition-transform group-hover:translate-x-1">
                      {"\u2197"}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="md:col-span-3">
          <Reveal delay={200}>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Studio
            </p>
            <address className="font-mono text-xs uppercase not-italic leading-relaxed tracking-[0.15em] text-foreground">
              Unit 04, Sector C
              <br />
              Berlin / Remote
              <br />
              Worldwide
            </address>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
