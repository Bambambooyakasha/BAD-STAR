import { Reveal } from "@/components/reveal"

const PROJECTS = [
  {
    title: "Resonance Field",
    type: "Generative Installation",
    format: "INST",
    place: "Tokyo",
    year: "2025",
  },
  {
    title: "Null Chamber",
    type: "Spatial / TouchDesigner",
    format: "SPAT",
    place: "Berlin",
    year: "2024",
  },
  {
    title: "Signal Drift",
    type: "Reactive Visual System",
    format: "SYS",
    place: "New York",
    year: "2024",
  },
  {
    title: "Concrete Light",
    type: "Architectural Projection",
    format: "PROJ",
    place: "London",
    year: "2023",
  },
  {
    title: "Static Bloom",
    type: "Audio-Reactive Sculpture",
    format: "OBJ",
    place: "Seoul",
    year: "2023",
  },
  {
    title: "Grid Theory",
    type: "Identity / Motion System",
    format: "SYS",
    place: "Amsterdam",
    year: "2022",
  },
]

export function WorkSection() {
  return (
    <section
      id="work"
      className="border-t border-border px-4 py-20 md:px-8 md:py-28"
    >
      <Reveal className="mb-10 flex items-end justify-between gap-4 md:mb-14">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            (01) — Archive Index
          </p>
          <h2 className="text-balance text-5xl font-bold uppercase leading-[0.9] tracking-[-0.02em] md:text-7xl">
            Selected
            <br />
            Works
          </h2>
        </div>
        <p className="hidden shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground md:block">
          {String(PROJECTS.length).padStart(2, "0")} Entries
          <br />
          2022 — 2025
        </p>
      </Reveal>

      {/* Column header — catalogue style */}
      <div className="grid grid-cols-12 gap-2 border-t border-border py-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        <span className="col-span-2 md:col-span-1">Idx</span>
        <span className="col-span-10 md:col-span-5">Title</span>
        <span className="hidden md:col-span-3 md:block">Discipline</span>
        <span className="hidden md:col-span-1 md:block">Fmt</span>
        <span className="hidden text-right md:col-span-2 md:block">Loc / Yr</span>
      </div>

      <ul>
        {PROJECTS.map((project, i) => (
          <Reveal as="li" key={project.title} delay={i * 60}>
            <a
              href="#contact"
              className="group relative grid grid-cols-12 items-center gap-2 overflow-hidden border-t border-border py-6 transition-colors duration-300 last:border-b hover:bg-foreground hover:text-background md:py-7"
            >
              {/* Halftone texture revealed on hover */}
              <span
                aria-hidden="true"
                className="halftone-dark pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-25"
              />
              <span className="relative col-span-2 font-mono text-xs tracking-[0.2em] text-muted-foreground group-hover:text-background/70 md:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="relative col-span-10 flex items-baseline gap-3 text-2xl font-bold uppercase tracking-[-0.01em] md:col-span-5 md:text-4xl">
                <span className="font-mono text-xs text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:text-background/70">
                  ★
                </span>
                {project.title}
              </span>
              <span className="relative col-span-7 col-start-3 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground group-hover:text-background/70 md:col-span-3 md:col-start-auto">
                {project.type}
              </span>
              <span className="relative hidden font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground group-hover:text-background/70 md:col-span-1 md:block">
                {project.format}
              </span>
              <span className="relative col-span-3 text-right font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground group-hover:text-background/70 md:col-span-2">
                {project.place}
                <br className="hidden md:block" /> {project.year}
              </span>
            </a>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
