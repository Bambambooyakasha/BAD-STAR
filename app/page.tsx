import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { WorkSection } from "@/components/work-section"
import { StudioSection } from "@/components/studio-section"
import { SystemsSection } from "@/components/systems-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"
import { HalftoneDivider } from "@/components/halftone-divider"

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <WorkSection />
        <HalftoneDivider label="Studio" />
        <StudioSection />
        <HalftoneDivider label="Systems" />
        <SystemsSection />
        <HalftoneDivider label="Contact" />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
