'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/#work', label: 'Work' },
  { href: '/#about', label: 'About' },
  { href: '/#process', label: 'Process' },
  { href: '/#contact', label: 'Contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/15 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between gap-4 px-5 md:h-20 md:px-8">
        <Link
          href="/"
          className="flex items-baseline gap-3 transition-opacity hover:opacity-70"
        >
          <span className="display-tight text-2xl md:text-3xl">Adekunle adedamola</span>
          <span className="label-mark hidden text-muted-foreground sm:inline">
            Creative Lead | Brand Strategy | Marketing Communications
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="label-mark text-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <span className="flex items-center gap-2 border border-foreground/20 px-3 py-1.5">
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-primary"
            />
            <span className="label-mark">Booking Q4</span>
          </span>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="flex size-10 items-center justify-center border border-foreground/20 md:hidden"
        >
          {open ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
          <span className="sr-only">
            {open ? 'Close menu' : 'Open menu'}
          </span>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-foreground/15 bg-background md:hidden"
        >
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href} className="border-b border-foreground/10">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="display-tight block px-5 py-5 text-4xl hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
