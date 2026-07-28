import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { getAdjacentProject, getProject, projects } from '@/lib/projects'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) return { title: 'Project not found — Maya Kestrel' }

  return {
    title: `${project.client} — ${project.category} | Maya Kestrel`,
    description: project.summary,
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) notFound()

  const next = getAdjacentProject(slug)

  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b border-foreground/15">
          <div className="mx-auto max-w-[1500px] px-5 pt-10 pb-10 md:px-8 md:pt-16">
            <Link
              href="/#work"
              className="label-mark inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              All work
            </Link>

            <p className="label-mark mt-10 text-primary">{project.client}</p>
            <h1 className="display-tight mt-4 max-w-[22ch] text-[clamp(2.5rem,8vw,7rem)] text-balance">
              {project.title}
            </h1>

            <dl className="mt-12 grid grid-cols-2 gap-y-6 border-t border-foreground/15 pt-6 md:grid-cols-4">
              <div className="flex flex-col gap-1.5">
                <dt className="label-mark text-muted-foreground">Year</dt>
                <dd className="font-medium">{project.year}</dd>
              </div>
              <div className="flex flex-col gap-1.5">
                <dt className="label-mark text-muted-foreground">Discipline</dt>
                <dd className="font-medium">{project.category}</dd>
              </div>
              <div className="col-span-2 flex flex-col gap-1.5">
                <dt className="label-mark text-muted-foreground">Scope</dt>
                <dd className="font-medium">{project.services.join(', ')}</dd>
              </div>
            </dl>
          </div>

          <div className="relative aspect-[16/10] w-full bg-muted md:aspect-[2/1]">
            <Image
              src={project.image || '/placeholder.svg'}
              alt={`${project.client} — ${project.category} hero image`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </section>

        <section className="border-b border-foreground/15">
          <div className="mx-auto grid max-w-[1500px] gap-10 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="display-tight text-4xl md:text-5xl">The brief</h2>
            </div>
            <div className="flex flex-col gap-10 lg:col-span-8">
              <p className="text-xl leading-relaxed text-pretty md:text-2xl">
                {project.brief}
              </p>

              <div className="flex flex-col gap-6 border-t border-foreground/15 pt-8">
                <h3 className="label-mark text-primary">Approach</h3>
                <ol className="flex flex-col gap-8">
                  {project.approach.map((item, index) => (
                    <li key={item} className="flex gap-5">
                      <span className="display-tight text-3xl text-foreground/25">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <p className="max-w-2xl text-lg leading-relaxed text-pretty">
                        {item}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-foreground/15 bg-foreground text-background">
          <div className="mx-auto max-w-[1500px] px-5 py-14 md:px-8 md:py-20">
            <h2 className="label-mark text-accent">Outcome</h2>
            <dl className="mt-8 grid gap-y-10 md:grid-cols-3 md:gap-x-10">
              {project.results.map((result) => (
                <div key={result.label} className="flex flex-col gap-3">
                  <dt className="label-mark order-2 text-background/60">
                    {result.label}
                  </dt>
                  <dd className="display-tight order-1 text-[clamp(3rem,8vw,6rem)]">
                    {result.value}
                  </dd>
                </div>
              ))}
            </dl>

            {project.quote && (
              <blockquote className="mt-14 border-t border-background/20 pt-10">
                <p className="display-tight max-w-[26ch] text-[clamp(1.75rem,4.5vw,3.5rem)] text-balance">
                  “{project.quote.text}”
                </p>
                <footer className="label-mark mt-6 text-background/60">
                  {project.quote.attribution}
                </footer>
              </blockquote>
            )}
          </div>
        </section>

        <section className="border-b border-foreground/15">
          <Link
            href={`/work/${next.slug}`}
            className="group mx-auto flex max-w-[1500px] flex-col gap-6 px-5 py-14 md:flex-row md:items-center md:justify-between md:px-8 md:py-20"
          >
            <div className="flex flex-col gap-3">
              <span className="label-mark text-muted-foreground">
                Next project
              </span>
              <span className="display-tight text-[clamp(2.5rem,7vw,5.5rem)] transition-colors group-hover:text-primary">
                {next.client}
              </span>
              <span className="label-mark text-primary">{next.category}</span>
            </div>
            <span className="flex size-16 shrink-0 items-center justify-center bg-foreground text-background transition-colors group-hover:bg-primary">
              <ArrowUpRight className="size-7" aria-hidden="true" />
            </span>
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
