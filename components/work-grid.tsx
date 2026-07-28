import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/projects'

const spanClasses: Record<string, string> = {
  wide: 'lg:col-span-8',
  tall: 'lg:col-span-4',
  standard: 'lg:col-span-6',
}

const ratioClasses: Record<string, string> = {
  wide: 'aspect-[16/10]',
  tall: 'aspect-[3/4]',
  standard: 'aspect-[4/3]',
}

export function WorkGrid() {
  return (
    <section id="work" className="scroll-mt-20 border-b border-foreground/15">
      <div className="mx-auto max-w-[1500px] px-5 py-14 md:px-8 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-foreground/15 pb-6">
          <h2 className="display-tight text-[clamp(2.25rem,6vw,5rem)]">
            Selected work
          </h2>
          <p className="label-mark max-w-xs text-muted-foreground">
            Campaigns, brand systems, and digital experiences designed to solve business challenges and create measurable impact.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-x-6 gap-y-12 pt-10 md:grid-cols-2 md:gap-y-16 lg:grid-cols-12">
          {projects.map((project, index) => (
            <li
              key={project.slug}
              className={`md:col-span-1 ${spanClasses[project.span]}`}
            >
              <Link href={`/work/${project.slug}`} className="group block">
                <div
                  className={`relative overflow-hidden bg-muted ${ratioClasses[project.span]}`}
                >
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={`${project.client} — ${project.category} project cover`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 60vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                  <span className="label-mark absolute top-0 left-0 bg-background px-3 py-2">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="absolute right-0 bottom-0 flex size-12 translate-y-full items-center justify-center bg-primary text-primary-foreground transition-transform duration-300 group-hover:translate-y-0">
                    <ArrowUpRight className="size-5" aria-hidden="true" />
                  </span>
                </div>

                <div className="flex flex-col gap-2 border-t border-foreground/20 pt-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="display-tight text-2xl md:text-3xl">
                      {project.client}
                    </span>
                    <span className="label-mark text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                  <p className="max-w-lg leading-relaxed text-muted-foreground text-pretty">
                    {project.summary}
                  </p>
                  <span className="label-mark mt-1 text-primary underline decoration-1 underline-offset-4">
                    {project.category}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
