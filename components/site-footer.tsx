import Link from 'next/link'

const social = [
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Read.cv', href: '#' },
]

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-[1500px] px-5 py-12 md:px-8 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          
          {/* Main Info Column */}
          <div className="flex flex-col gap-3">
            <p className="label-mark text-muted-foreground">Adekunle Adedamola</p>
            <p className="max-w-xs leading-relaxed">
              Have a brand, campaign, or product you'd like to bring to life?
              Tell me about your goals, challenges, and timeline, and let's start
              the conversation.{" "}
              <Link href="mailto:adedamolav56@gmail.com" className="underline">
                adedamolav56@gmail.com
              </Link>
            </p>
          </div> {/* <-- FIXED: Closed this div properly */}

          {/* Social Nav Column */}
          <nav aria-label="Social" className="flex flex-col gap-3">
            <p className="label-mark text-muted-foreground">Elsewhere</p>
            <ul className="flex flex-col gap-2">
              {social.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="underline decoration-1 underline-offset-4 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Column */}
          <div className="flex flex-col gap-3">
            <p className="label-mark text-muted-foreground">Next steps</p>
            <Link
              href="/#contact"
              className="label-mark w-fit border border-foreground/25 px-5 py-3 transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Start a project
            </Link>
          </div>

        </div> {/* <-- FIXED: This now successfully closes the row container */}
      </div>

      {/* Decorative Text Banner */}
      <div className="overflow-hidden border-t border-foreground/15 px-5 md:px-8">
        <p
          aria-hidden="true"
          className="display-tight -mb-3 text-center text-[clamp(3.5rem,17vw,15rem)] text-foreground/90"
        >
          Adedamola
        </p>
      </div>

      {/* Sub-Footer Copyright */}
      <div className="border-t border-foreground/15">
        <div className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-between gap-3 px-5 py-5 md:px-8">
          <p className="label-mark text-muted-foreground">
            © {new Date().getFullYear()} Adedamolav
          </p>
          <p className="label-mark text-muted-foreground">
            Portfolio website
          </p>
        </div>
      </div>
    </footer>
  );
}