import Image from 'next/image'

const clients = [
  'SunFi',
  'DigiSplash',
  'MTN',
  'Atom sport management',
  'GSF FUTA',
  'Amstel malt',
  'Damola Skincare',
  'The burger parlor',
]

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-b border-foreground/15">
      <div className="mx-auto max-w-[1500px] px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-muted">
              <Image
                src="/portrait.png"
                alt="Maya Kestrel, brand and graphic designer, in her studio"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <p className="label-mark mt-4 text-muted-foreground">
              Fig. 01 — The studio, Lisbon
            </p>
          </div>

          <div className="flex flex-col gap-8 lg:col-span-7">
            <span className="label-mark text-primary">About</span>
            <h2 className="display-tight text-[clamp(2.25rem,5.5vw,4.5rem)] text-balance">
              CREATING BRANDS AND CAMPAIGNS
              <br />
              <span className="text-primary">THAT DRIVE BUSINESS</span>
            </h2>

            <div className="flex flex-col gap-5 text-lg leading-relaxed text-pretty">
              <p>
               Over the past five years, I've worked at the intersection of branding, marketing,
               and digital product design, helping businesses transform ideas into meaningful
               customer experiences.
              </p>
              <p>
                From integrated marketing campaigns and retail branding to UI/UX and creative systems,
                I collaborate with marketing, product, engineering, and business teams to solve communication
                challenges through strategic creativity.
              </p>
              <p>
               I believe great creative work starts with understanding the business problem—not just
               producing beautiful visuals. Every campaign, identity system, interface, and presentation I create is designed to
               strengthen brand perception, improve customer engagement, and support measurable business outcomes.
              </p>
              <p>
               Today, my focus extends beyond design execution. I help shape creative direction, improve design systems,
               streamline creative operations, and build scalable visual experiences that grow alongside the businesses they serve.
              </p>
            </div>

            <div>
              <p className="label-mark border-b border-foreground/15 pb-3 text-muted-foreground">
                Selected clients
              </p>
              <ul className="grid grid-cols-2 sm:grid-cols-3">
                {clients.map((client) => (
                  <li
                    key={client}
                    className="border-b border-foreground/10 py-3 text-sm font-medium md:text-base"
                  >
                    {client}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
