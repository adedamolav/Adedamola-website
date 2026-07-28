const items = [
  'Identity systems',
  'Packaging',
  'Type design',
  'Art direction',
  'Editorial',
  'Campaigns',
  'Guidelines',
]

export function Marquee() {
  return (
    <div className="overflow-hidden border-b border-foreground/15 bg-foreground py-4 text-background">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 items-center"
          >
            {items.map((item) => (
              <li
                key={item}
                className="display-tight flex items-center gap-8 px-8 text-3xl md:text-5xl"
              >
                {item}
                <span className="text-accent" aria-hidden="true">
                  ✳
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
