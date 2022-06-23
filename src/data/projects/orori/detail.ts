import { ProjectData } from '../../types'
import { glowgeneOverview } from '../glowgene/overview'
import { mrSunOverview } from '../mr-sun/overview'
import { ororiOverview } from './overview'

export const orori: ProjectData = {
  ...ororiOverview,
  images: [
    '/projects/orori/1.jpg',
    '/projects/orori/2.jpg',
    '/projects/orori/3.jpg',
    '/projects/orori/4.jpg',
  ],

  video: 'https://www.youtube.com/watch?v=I3_sfYY9p1w',

  meta: [
    { label: 'Client', value: 'Orori' },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Corporate Video' },
    { label: 'Date', value: '10 January 2020' },
  ],

  overview: `N'pure is a local skincare and beauty brand that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Collective
    
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Art Director - Michelle Amadea
    Director of Photography - Ivan Saputra Alam
    Offline Editor & Colorist- Ivan Saputra Alam
    Online Editor - Michelle Amadea
    Copywriter - Eva Mega Astria
    Sound Mixing - Cornelius Kurnia
    Scoring Music - Abel Huray`,

  relatedWorks: [glowgeneOverview, mrSunOverview],
}
