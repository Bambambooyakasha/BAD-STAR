import { Marquee } from "@/components/marquee"
import { HalftoneStar } from "@/components/halftone-star"

export function Hero() {
  return (
    <section
      id="top"
      className="grain relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-16"
    >
      {/* Animated halftone star — offset to create editorial tension */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-22vw] top-[6vh] h-[78vw] w-[78vw] max-h-[680px] max-w-[680px] mask-radial md:right-[2vw] md:top-[4vh] md:h-[62vh] md:w-[62vh]"
      >
        <HalftoneStar className="h-full w-full" />
      </div>

      {/* Top meta row */}
      <div className="relative z-10 grid grid-cols-2 gap-4 px-4 pt-10 md:grid-cols-4 md:px-8">
        <p className="font-mono text-xs uppercase leading-relaxed tracking-[0.2em] text-muted-foreground">
          Creative
          <br />
          Technology
        </p>
        <p className="font-mono text-xs uppercase leading-relaxed tracking-[0.2em] text-muted-foreground">
          Installations
          <br />
          Spatial Design
        </p>
        <p className="hidden font-mono text-xs uppercase leading-relaxed tracking-[0.2em] text-muted-foreground md:block">
          TouchDesigner
          <br />
          Visual Systems
        </p>
        <p className="hidden text-right font-mono text-xs uppercase leading-relaxed tracking-[0.2em] text-muted-foreground md:block">
          Est. 2019
          <br />
          Index ∞
        </p>
      </div>

      {/* Giant wordmark */}
      <div className="relative z-10 px-4 md:px-8">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground md:mb-7">
          ★ — Digital / Physical Design Studio
        </p>
        <h1 className="font-sans font-bold uppercase leading-[0.8] tracking-[-0.035em]">
          <span className="line-mask">
            <span
              className="line-rise text-[23vw] md:text-[19vw]"
              style={{ animationDelay: "0.05s" }}
            >
              Bad
            </span>
          </span>
          <span className="line-mask -mt-[1vw] block">
            <span
              className="line-rise text-[23vw] md:text-[19vw]"
              style={{ animationDelay: "0.18s" }}
            >
              Star
            </span>
          </span>
        </h1>
      </div>

      {/* Bottom statement + marquee */}
      <div className="relative z-10">
        <div className="grid grid-cols-1 items-end gap-6 px-4 pb-8 pt-10 md:grid-cols-12 md:px-8">
          <p
            className="line-mask col-span-1 max-w-md text-pretty text-base leading-relaxed text-foreground md:col-span-6 md:text-lg"
            style={{ overflow: "hidden" }}
          >
            <span className="line-rise" style={{ animationDelay: "0.4s" }}>
              A studio operating between the digital and the physical — building
              installations, visual systems, and spatial experiences that
              respond, move, and react.
            </span>
          </p>
          <div className="md:col-span-3 md:col-start-10 md:justify-self-end">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Enter Archive
              <span className="transition-transform group-hover:translate-y-1">
                ↓
              </span>
            </a>
          </div>
        </div>

        <div className="border-y border-border py-3">
          <Marquee>
            <span className="mx-6 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Installations
            </span>
            <span className="mx-6 font-mono text-xs uppercase tracking-[0.3em]">
              ★
            </span>
            <span className="mx-6 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              TouchDesigner
            </span>
            <span className="mx-6 font-mono text-xs uppercase tracking-[0.3em]">
              ★
            </span>
            <span className="mx-6 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Visual Systems
            </span>
            <span className="mx-6 font-mono text-xs uppercase tracking-[0.3em]">
              ★
            </span>
            <span className="mx-6 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Spatial Design
            </span>
            <span className="mx-6 font-mono text-xs uppercase tracking-[0.3em]">
              ★
            </span>
            <span className="mx-6 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Creative Technology
            </span>
            <span className="mx-6 font-mono text-xs uppercase tracking-[0.3em]">
              ★
            </span>
          </Marquee>
        </div>
      </div>
    </section>
  )
}
