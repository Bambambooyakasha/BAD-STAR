import { Reveal } from "@/components/reveal"

const STATS = [
  { value: "06", label: "Years Active" },
  { value: "40+", label: "Installations" },
  { value: "12", label: "Countries" },
  { value: "∞", label: "Pixels Pushed" },
]

const CAPABILITIES = [
  "Real-time Graphics",
  "TouchDesigner",
  "Spatial Computing",
  "Sensor Integration",
  "Projection Mapping",
  "Sound Reactivity",
  "Custom Hardware",
  "Generative Design",
]

export function StudioSection() {
  return (
    <section
      id="studio"
      className="px-4 py-12 md:px-8 md:py-20"
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            (02) — Studio
          </p>
        </Reveal>

        <div className="md:col-span-8">
          <Reveal>
            <h2 className="text-balance text-3xl font-bold uppercase leading-[1.05] tracking-[-0.02em] md:text-5xl">
              We design systems that live in space — where code becomes light,
              motion, and matter.
            </h2>
          </Reveal>

          <Reveal delay={120} className="mt-8 max-w-xl">
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Bad Star is a hybrid practice working across creative technology
              and physical design. We prototype with TouchDesigner, build with
              custom tooling, and install in galleries, venues, and public
              space. Every project is an engineered system — precise, reactive,
              and built to perform live.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-12 grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="bg-background p-5">
                  <div className="text-4xl font-bold tracking-tight md:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={260}>
            <ul className="mt-10 flex flex-wrap gap-2">
              {CAPABILITIES.map((cap) => (
                <li
                  key={cap}
                  className="border border-border px-3 py-2 font-mono text-xs uppercase tracking-[0.15em] text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  {cap}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
