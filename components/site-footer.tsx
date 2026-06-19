export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="flex flex-col gap-4 px-4 py-6 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          &copy; {new Date().getFullYear()} Bad Star Studio
        </p>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Creative Technology / Spatial Design
        </p>
        <a
          href="#top"
          className="font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-opacity hover:opacity-60"
        >
          Back to top &uarr;
        </a>
      </div>
      <div className="overflow-hidden border-t border-border">
        <h2 className="select-none whitespace-nowrap py-2 text-center text-[19vw] font-bold uppercase leading-none tracking-[-0.04em] text-foreground">
          Bad Star
        </h2>
      </div>
    </footer>
  )
}
