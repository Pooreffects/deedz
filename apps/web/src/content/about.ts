import { NarrativeBlockData } from '@/types/about';

export const ABOUT_NARRATIVE: NarrativeBlockData[] = [
  {
    tag: '01 // THE HOOK',
    title: 'Engineering the \n Algerian Hustle.',
    content:
      'A lean software lab for the sellers, the hustlers, and SMEs that keep the Algerian market moving. No "Kahlana," no corporate bloat. Just high-velocity, lightweight tools for people who don\'t have time to waste.',
    sub: "We build the 'Digital Brain' for your business, syncing the 'missing layer' between your hard work and your profit.",
  },
  {
    tag: '02 // THE TENSION',
    title: 'The friction is invisible, \n but it’s draining your wallet.',
    content:
      "You’re shipping nationwide, but 'Retours' are eating your margins because you can't spot a 'Ghost-buyer' until your package is already stuck 500km away.",
    sub: "You shouldn't have to spend half your day doing 'administrative gymnastics' just to see if you actually made a profit.",
  },
  {
    tag: '03 // THE STRATEGY',
    title: 'Intelligence that lives \n where you do: On your phone.',
    content:
      'DEEDZ builds Layer 2 (L2) solutions—lightweight, mobile-first PWAs that sit on top of your existing workflow and do the heavy thinking for you.',
    sub: "The Shared Shield: We flag high-risk phone numbers based on real-world delivery history across the network. No more wasting shipping fees on 'Ghosters'.",
  },
  {
    tag: '04 // THE ARCHITECT',
    title: 'One dev. One monorepo. \n Total focus.',
    content:
      'I’m a Product Architect building DEEDZ out of a single, high-performance Turborepo using Next.js 15, Supabase, and AI-driven logic.',
    sub: 'I’m not just shipping code; I’m shipping the digital infrastructure that lets the Algerian hustle finally scale.',
  },
] as const;
