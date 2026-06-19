export function HalftoneDivider({ label }: { label?: string }) {
  return (
    <div className="relative flex items-center gap-4 px-4 py-6 md:px-8">
      <div className="halftone-divider h-3 flex-1 opacity-50" aria-hidden="true" />
      {label ? (
        <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          {label}
        </span>
      ) : null}
      <div className="halftone-divider h-3 flex-1 opacity-50" aria-hidden="true" />
    </div>
  )
}
