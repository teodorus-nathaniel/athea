import { ProjectData } from '../../types'
import { glowgeneOverview } from '../glowgene/overview'
import { mrSunOverview } from '../mr-sun/overview'
import { eastventureOverview } from './overview'

export const eastventure: ProjectData = {
  ...eastventureOverview,
  images: [
    '/projects/eastventure/1.jpg',
    '/projects/eastventure/2.jpg',
    '/projects/eastventure/3.jpg',
    '/projects/eastventure/4.jpg',
  ],

  video: 'https://youtu.be/Vl1YJbCzcCM',

  meta: [
    { label: 'Client', value: "East Venture" },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Corporate Video' },
    { label: 'Date', value: '10 February 2020' },
  ],

  overview: `N'pure is a local skincare and beauty brand that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Collective
    
    Agency - IDN Media
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Art Director - Michelle Amadea
    Director of Photography - Ivan Saputra Alam
    Offline Editor & Colorist - Ivan Saputra Alam
    Motion Artist - Michelle Amadea
    Sound Scoring - Abel Huray
    Sound Engineer - Cornelius Kurnia`,

  relatedWorks: [glowgeneOverview, mrSunOverview],
}
