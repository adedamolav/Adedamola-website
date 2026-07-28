'use client'

import { useActionState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { submitEnquiry } from '@/app/actions'
import { initialEnquiryState } from '@/lib/enquiry'

const fieldClasses =
  'w-full border border-foreground/25 bg-card px-4 py-3.5 text-base outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/25'

export function Contact() {
  const [state, formAction, pending] = useActionState(
    submitEnquiry,
    initialEnquiryState,
  )

  return (
    <section id="contact" className="scroll-mt-20 border-b border-foreground/15">
      <div className="mx-auto max-w-[1500px] px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-8 lg:col-span-5">
            <span className="label-mark text-primary">Contact</span>
            <h2 className="display-tight text-[clamp(2.5rem,7vw,6rem)] text-balance">
             LET'S BUILD
              <br />
              SOMETHING THAT
              MATTERS
            </h2>
            <p className="text-lg leading-relaxed text-pretty">
              Whether you're launching a brand, planning a campaign,
              refining a digital product, or looking to strengthen your
              marketing, I'd love to hear about it. Share your goals, challenges,
              and timeline, and let's explore how strategic creativity can help
              move your business forward.
            </p>

            <dl className="flex flex-col border-t border-foreground/15">
              {[
                { label: 'Email', value: 'adedamolav56@gmail.com' },
                { label: 'Instagram', value: '@adedamolav' },
                { label: 'Response time', value: 'Usually within 24 hours' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-wrap items-baseline justify-between gap-3 border-b border-foreground/10 py-4"
                >
                  <dt className="label-mark text-muted-foreground">
                    {item.label}
                  </dt>
                  <dd className="font-medium">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-7">
            {state.status === 'success' ? (
              <div className="flex flex-col items-start gap-5 border border-foreground/20 bg-card p-8 md:p-12">
                <span className="flex size-12 items-center justify-center bg-primary text-primary-foreground">
                  <Check className="size-6" aria-hidden="true" />
                </span>
                <h3 className="display-tight text-4xl">Enquiry sent</h3>
                <p
                  role="status"
                  className="max-w-md text-lg leading-relaxed text-pretty"
                >
                  {state.message}
                </p>
              </div>
            ) : (
              <form action={formAction} className="flex flex-col gap-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="label-mark">
                      Your name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Alex Moreau"
                      aria-describedby={
                        state.errors.name ? 'name-error' : undefined
                      }
                      className={fieldClasses}
                    />
                    {state.errors.name && (
                      <p id="name-error" className="text-sm text-destructive">
                        {state.errors.name}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="label-mark">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="alex@company.com"
                      aria-describedby={
                        state.errors.email ? 'email-error' : undefined
                      }
                      className={fieldClasses}
                    />
                    {state.errors.email && (
                      <p id="email-error" className="text-sm text-destructive">
                        {state.errors.email}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="label-mark">
                      Company <span className="normal-case">(organization)</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Sonic Bloom Ltd."
                      className={fieldClasses}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="budget" className="label-mark">
                      How can i help?
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      defaultValue="Other"
                      className={fieldClasses}
                    >
                      <option value="under-10k">Branding</option>
                      <option value="10-25k">Campaign Design</option>
                      <option value="25-50k">Creative Strategy</option>
                      <option value="50k-plus">UI/UX</option>
                      <option value="50k-plus">Marketing Assets</option>
                      <option value="unsure">Other</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="label-mark">
                    About the project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Tell me about your business, the challenge you're solving, your goals, and what success looks like."
                    aria-describedby={
                      state.errors.message ? 'message-error' : undefined
                    }
                    className={`${fieldClasses} resize-y`}
                  />
                  {state.errors.message && (
                    <p id="message-error" className="text-sm text-destructive">
                      {state.errors.message}
                    </p>
                  )}
                </div>

                {state.status === 'error' && (
                  <p role="alert" className="text-sm text-destructive">
                    {state.message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={pending}
                  className="label-mark flex items-center justify-center gap-2 bg-foreground px-8 py-5 text-background transition-colors hover:bg-primary disabled:opacity-60"
                >
                  {pending ? 'Sending…' : 'START THE CONVERSATION'}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
