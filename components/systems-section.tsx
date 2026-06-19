import { Reveal } from "@/components/reveal"
import { Marquee } from "@/components/marquee"

const SYSTEMS = [
  {
    id: "S—01",
    title: "Real-time Engines",
    body: "Node-based pipelines in TouchDesigner driving live visuals, synced to audio, sensors, and data streams at frame-perfect latency.",
  },
  {
    id: "S—02",
    title: "Spatial Frameworks",
    body: "Modular hardware and software rigs for installations — projection, LED, depth sensing, and motion tracking, deployed on site.",
  },
  {
    id: "S—03",
    title: "Visual Identity Systems",
    body: "Generative brand systems where logos, type, and motion are governed by rules — endlessly variable, always coherent.",
  },
  {
    id: "S—04",
    title: "Interaction Logic",
    body: "Custom sensing and control layers that turn a body, a sound, or a signal into responsive light and form.",
  },
]

export function SystemsSection() {
  return (
    <section
      id="systems"
      className="px-4 py-12 md:px-8 md:py-20"
    >
      <Reveal className="mb-12">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          (03) — Systems
        </p>
        <h2 className="text-balance text-5xl font-bold uppercase leading-[0.9] tracking-[-0.02em] md:text-7xl">
          How It Works
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2">
        {SYSTEMS.map((system, i) => (
          <Reveal key={system.id} delay={i * 80} className="bg-background">
            <article className="group flex h-full flex-col justify-between gap-12 p-6 transition-colors hover:bg-foreground hover:text-background md:p-10">
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground group-hover:text-background/70">
                  {system.id}
                </span>
                <span className="font-mono text-xs text-muted-foreground group-hover:text-background/70">
                  &#9733;
                </span>
              </div>
              <div>
                <h3 className="mb-4 text-2xl font-bold uppercase tracking-[-0.01em] md:text-3xl">
                  {system.title}
                </h3>
                <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground group-hover:text-background/80">
                  {system.body}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="relative mt-16 overflow-hidden border-y border-border py-6">
        <div
          aria-hidden="true"
          className="halftone-coarse pointer-events-none absolute inset-0 opacity-[0.07]"
        />
        <Marquee slow>
          <span className="mx-8 text-5xl font-bold uppercase tracking-[-0.02em] md:text-7xl">
            Digital &times; Physical
          </span>
          <span className="mx-8 text-5xl font-bold uppercase tracking-[-0.02em] text-muted-foreground md:text-7xl">
            Code &times; Light
          </span>
          <span className="mx-8 text-5xl font-bold uppercase tracking-[-0.02em] md:text-7xl">
            Form &times; Motion
          </span>
          <span className="mx-8 text-5xl font-bold uppercase tracking-[-0.02em] text-muted-foreground md:text-7xl">
            Signal &times; Space
          </span>
        </Marquee>
      </div>
    </section>
  )
}
