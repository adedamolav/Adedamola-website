import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { Process } from '@/components/process'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { WorkGrid } from '@/components/work-grid'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <WorkGrid />
        <About />
        <Process />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
