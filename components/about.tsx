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
              Eleven years of making
              <br />
              things clients can
              <br />
              <span className="text-primary">actually use</span>
            </h2>

            <div className="flex flex-col gap-5 text-lg leading-relaxed text-pretty">
              <p>
                I spent six years inside two branding studios before going
                independent in 2019. That means you get studio-grade thinking
                without the account layer — you talk to the person drawing the
                work, every time.
              </p>
              <p>
                My favourite projects are the ones with real constraints: a
                printer&apos;s minimum order, a two-ink budget, a founder who
                has to keep the brand alive without a designer on staff. Good
                systems survive contact with reality, and reality is usually
                cheaper than the pitch deck suggests.
              </p>
              <p>
                Everything I hand over comes documented and templated. The
                measure of a brand system isn&apos;t the launch — it&apos;s
                what it looks like eighteen months later.
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
