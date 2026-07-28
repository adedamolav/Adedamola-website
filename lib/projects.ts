export type Project = {
  slug: string
  title: string
  client: string
  year: string
  category: string
  summary: string
  image: string
  /** Feature size in the work grid */
  span: 'wide' | 'tall' | 'standard'
  services: string[]
  brief: string
  approach: string[]
  results: { value: string; label: string }[]
  quote?: { text: string; attribution: string }
}

export const projects: Project[] = [
  {
    slug: 'solstice-roasters',
    title: 'A roaster that tells time by the light',
    client: 'Solstice Roasters',
    year: '2025',
    category: 'Identity & Packaging',
    summary:
      'A full identity and packaging system for a specialty roaster, built around a single rotating arc that marks each roast level.',
    image: '/projects/sundial-coffee.png',
    span: 'wide',
    services: ['Naming', 'Identity', 'Packaging', 'Art direction'],
    brief:
      'Solstice had outgrown a logo made in a hurry. They needed a system that could carry twelve single-origin roasts, a subscription box and a first retail cafe without collapsing into visual noise.',
    approach: [
      'We reduced the brand to one geometric device: an arc that rotates position depending on roast level, so the shelf reads as a single continuous sundial.',
      'Bag colour is fixed to uncoated kraft, letting an electric blue do all of the shouting. Roast information sits in a tight typographic block that scales from a 60g sample to a 5kg wholesale sack.',
      'The system shipped with a 40-page guideline document and a set of InDesign templates so the in-house team could launch new origins without us.',
    ],
    results: [
      { value: '+38%', label: 'Retail sell-through' },
      { value: '12', label: 'SKUs unified' },
      { value: '3wk', label: 'To first print run' },
    ],
    quote: {
      text: 'People pick the bags up now. That never used to happen.',
      attribution: 'Founder, Solstice Roasters',
    },
  },
  {
    slug: 'velocita',
    title: 'Built loud for people who train quiet',
    client: 'Velocità',
    year: '2025',
    category: 'Identity & Campaign',
    summary:
      'A condensed wordmark, chevron monogram and campaign system for a performance apparel label launching in six markets.',
    image: '/projects/vantage-athletic.png',
    span: 'tall',
    services: ['Identity', 'Typography', 'Campaign', 'Motion'],
    brief:
      'Velocità was entering a category defined by two or three enormous incumbents. The brief was simple and brutal: be impossible to mistake for them.',
    approach: [
      'We drew a custom condensed wordmark with a single cut angle that repeats in the chevron monogram, the garment trims and the campaign crops.',
      'The palette is deliberately narrow — blue and acid on black — so photography, print and in-store all snap together at a distance.',
      'A motion kit defined how the mark enters, holds and exits, giving the social team a repeatable grammar rather than one-off assets.',
    ],
    results: [
      { value: '6', label: 'Launch markets' },
      { value: '2.4M', label: 'Campaign reach' },
      { value: '1', label: 'Custom typeface' },
    ],
  },
  {
    slug: 'fold-editions',
    title: 'A publishing house on a single grid',
    client: 'Fold Editions',
    year: '2024',
    category: 'Editorial System',
    summary:
      'An editorial identity and cover system for an independent art book publisher releasing eight titles a year.',
    image: '/projects/fold-editions.png',
    span: 'standard',
    services: ['Editorial design', 'Type system', 'Print production'],
    brief:
      'Every Fold cover had been designed from scratch, which meant every cover was a negotiation. They wanted a system that felt authored but took hours, not weeks.',
    approach: [
      'One grid, three cover archetypes, and a rule that the title always breaks the margin. Constraint became the house style.',
      'We specified two paper stocks and a single spot ink per season, cutting production decisions to almost nothing.',
      'Spine typography was designed to be read as a set — a full Fold shelf spells the imprint.',
    ],
    results: [
      { value: '8/yr', label: 'Titles on system' },
      { value: '-60%', label: 'Design hours per cover' },
      { value: '2', label: 'Paper stocks' },
    ],
  },
  {
    slug: 'botanica-wild',
    title: 'Apothecary packaging with a loud mouth',
    client: 'Botanica Wild',
    year: '2024',
    category: 'Packaging & Illustration',
    summary:
      'Hand-drawn botanical illustration and label architecture for a range of thirty plant-based tinctures and tonics.',
    image: '/projects/bloom-botanics.png',
    span: 'standard',
    services: ['Illustration', 'Packaging', 'Copy direction'],
    brief:
      'Botanica sat in a category of beige minimalism. They wanted warmth and personality without losing the credibility a wellness product needs.',
    approach: [
      'Each ingredient got its own drawn illustration, inked in two colours so the range reads as a family across thirty labels.',
      'Label architecture puts the plant first and the claim second, which kept regulatory copy legible without letting it dominate.',
      'Bottle shapes were reduced from seven to three, cutting tooling cost and making the shelf presence far stronger.',
    ],
    results: [
      { value: '30', label: 'Labels drawn' },
      { value: '3', label: 'Bottle formats' },
      { value: '+52%', label: 'DTC conversion' },
    ],
    quote: {
      text: 'It looks like a brand with a point of view instead of a supplement.',
      attribution: 'Brand Lead, Botanica Wild',
    },
  },
  {
    slug: 'sonic-bloom',
    title: 'Posters loud enough to hear',
    client: 'Sonic Bloom Festival',
    year: '2023',
    category: 'Campaign & Poster System',
    summary:
      'A rotating poster system for a three-day music festival, built to be produced by volunteers in a weekend.',
    image: '/projects/northbank-festival.png',
    span: 'tall',
    services: ['Campaign', 'Poster design', 'Wayfinding'],
    brief:
      'Sonic Bloom needed 200 unique posters, a full wayfinding pack and a merch range — designed and printed by a team of four with no budget for photography.',
    approach: [
      'Type does everything. Names are set enormous, rotated on a fixed set of five angles, and layered over two flat inks.',
      'A single riso-friendly two-colour spec meant the whole campaign could be printed locally, overnight, for very little.',
      'Wayfinding reuses the same angles and inks, so the site feels like the poster you saw on the way in.',
    ],
    results: [
      { value: '200', label: 'Unique posters' },
      { value: '2', label: 'Inks total' },
      { value: '48h', label: 'Print turnaround' },
    ],
  },
  {
    slug: 'kilo-studio',
    title: 'A wordmark cut from one shape',
    client: 'Kilo Studio',
    year: '2023',
    category: 'Type & Wordmark',
    summary:
      'A custom display face and wordmark for an architecture studio, drawn from the proportions of their own building.',
    image: '/projects/kilo-studio.png',
    span: 'wide',
    services: ['Type design', 'Wordmark', 'Guidelines'],
    brief:
      'Kilo wanted an identity that would still be right in twenty years — something structural rather than stylistic.',
    approach: [
      'We measured the column spacing of their studio and used that ratio as the stem-to-counter relationship for every letter.',
      'The face ships in two weights with a tight uppercase set for signage and a looser text cut for documents.',
      'Guidelines are one page. If it needs more than that, the system is wrong.',
    ],
    results: [
      { value: '2', label: 'Weights drawn' },
      { value: '184', label: 'Glyphs' },
      { value: '1pg', label: 'Guidelines' },
    ],
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getAdjacentProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug)
  if (index === -1) return projects[0]
  return projects[(index + 1) % projects.length]
}
