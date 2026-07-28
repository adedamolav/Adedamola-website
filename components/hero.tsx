import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'

const facts = [
  { label: 'Based', value: 'Lagos, Nigeria / Remote' },
  { label: 'Experience', value: '5+ Years ' },
  { label: 'INDUSTRIES', value: 'Fintech, Energy, Technology, FMCG, Media' },
  { label: 'IMPACT', value: '300+ Campaign Assets Delivered' },
]

export function Hero() {
  return (
    <section className="border-b border-foreground/15">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="flex flex-col gap-10 pt-14 pb-12 md:pt-24 md:pb-16">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="label-mark bg-primary px-2.5 py-1.5 text-primary-foreground">
              Creative Lead
            </span>
            <span className="label-mark text-muted-foreground">
              Brand Strategy · Campaigns · Creative Direction · Digital Experience
            </span>
          </div>

          <h1 className="display-tight max-w-[20ch] text-[clamp(3rem,11vw,10.5rem)] text-balance">
            Building Brands
            <br />
            <span className="text-primary">That People</span>
            <br />
            Remember
          </h1>

          <div className="flex flex-col gap-10 border-t border-foreground/15 pt-8 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-2xl text-lg leading-relaxed text-pretty md:text-2xl">
              I&apos;m Adedamola Adekunle, a Creative Lead specializing in brand strategy, integrated campaigns, and digital experiences. I partner with ambitious businesses to transform complex ideas into memorable brands, compelling marketing campaigns, and customer experiences that drive engagement, strengthen brand perception, and support measurable business growth.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="#work"
                className="label-mark flex items-center gap-2 bg-foreground px-6 py-4 text-background transition-colors hover:bg-primary"
              >
                View Projects
                <ArrowDownRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="#contact"
                className="label-mark flex items-center gap-2 border border-foreground/25 px-6 py-4 transition-colors hover:border-foreground hover:bg-accent hover:text-accent-foreground"
              >
                Let&apos;s Build Together
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <dl className="grid grid-cols-2 border-t border-foreground/15 md:grid-cols-4">
        {facts.map((fact) => (
          <div
            key={fact.label}
            className="flex flex-col gap-1.5 border-r border-b border-foreground/10 px-5 py-6 last:border-r-0 md:border-b-0 md:px-8"
          >
            <dt className="label-mark text-muted-foreground">{fact.label}</dt>
            <dd className="text-base font-medium md:text-lg">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
