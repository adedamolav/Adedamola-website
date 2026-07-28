const steps = [
  {
    number: '01',
    title: 'Dig',
    body: 'A week of interviews, category teardown and an audit of everything you already own. You get a written position before anyone draws anything.',
  },
  {
    number: '02',
    title: 'Draw',
    body: 'Two directions, presented in context — on a bag, a sign, a screen. No mood boards pretending to be design work.',
  },
  {
    number: '03',
    title: 'Build',
    body: 'The chosen route is extended into a full system: type, colour, layout, illustration, motion. Production files go straight to your printer.',
  },
  {
    number: '04',
    title: 'Hand over',
    body: 'Guidelines, editable templates and a walkthrough session with your team, so the brand keeps working after I log off.',
  },
]

export function Process() {
  return (
    <section
      id="process"
      className="scroll-mt-20 border-b border-foreground/15 bg-foreground text-background"
    >
      <div className="mx-auto max-w-[1500px] px-5 py-14 md:px-8 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-background/20 pb-6">
          <h2 className="display-tight text-[clamp(2.25rem,6vw,5rem)]">
            How it works
          </h2>
          <p className="label-mark max-w-xs text-background/60">
            Four stages, fixed fee, no surprise invoices
          </p>
        </div>

        <ol className="grid gap-y-10 pt-10 md:grid-cols-2 md:gap-x-10 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.number} className="flex flex-col gap-4">
              <span className="display-tight text-6xl text-accent md:text-7xl">
                {step.number}
              </span>
              <h3 className="display-tight border-t border-background/25 pt-4 text-3xl">
                {step.title}
              </h3>
              <p className="leading-relaxed text-background/70 text-pretty">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
