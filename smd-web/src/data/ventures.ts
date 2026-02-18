export interface VentureCard {
  slug: string
  name: string
  stage: string
  url: string
  summary: string
}

export const ventures: VentureCard[] = [
  {
    slug: 'venture-crane',
    name: 'Venture Crane',
    stage: 'Operating',
    url: 'https://venturecrane.com',
    summary:
      'Product factory infrastructure and methodology for multi-agent development.',
  },
  {
    slug: 'kid-expenses',
    name: 'Kid Expenses',
    stage: 'Beta',
    url: 'https://kidexpenses.app',
    summary: 'Shared child expense tracking for co-parents.',
  },
  {
    slug: 'durgan-field-guide',
    name: 'Durgan Field Guide',
    stage: 'Market Test',
    url: 'https://durganfieldguide.com',
    summary: 'Auction intelligence workflows and insights for operators.',
  },
  {
    slug: 'silicon-crane',
    name: 'Silicon Crane',
    stage: 'Design',
    url: 'https://siliconcrane.com',
    summary: 'Validation-as-a-service approach for disciplined product bets.',
  },
  {
    slug: 'draft-crane',
    name: 'Draft Crane',
    stage: 'Design',
    url: 'https://draftcrane.com',
    summary: 'Browser writing environment focused on long-form nonfiction.',
  },
]
