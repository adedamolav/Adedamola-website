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
              Got something
              <br />
              worth building?
            </h2>
            <p className="text-lg leading-relaxed text-pretty">
              Tell me what you&apos;re making, who it&apos;s for and when it
              needs to exist. I&apos;ll come back with a realistic scope, a
              fixed fee and an honest answer about whether I&apos;m the right
              person for it.
            </p>

            <dl className="flex flex-col border-t border-foreground/15">
              {[
                { label: 'Email', value: 'studio@mayakestrel.com' },
                { label: 'Instagram', value: '@mayakestrel.studio' },
                { label: 'Typical engagement', value: '6–10 weeks' },
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
                      Company <span className="normal-case">(optional)</span>
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
                      Budget range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      defaultValue="10-25k"
                      className={fieldClasses}
                    >
                      <option value="under-10k">Under £10k</option>
                      <option value="10-25k">£10k – £25k</option>
                      <option value="25-50k">£25k – £50k</option>
                      <option value="50k-plus">£50k+</option>
                      <option value="unsure">Not sure yet</option>
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
                    placeholder="What are you building, who is it for, and what has to be true by launch?"
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
                  {pending ? 'Sending…' : 'Send enquiry'}
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
