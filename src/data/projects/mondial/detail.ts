import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { mondialOverview } from './overview'

export const mondial: ProjectData = {
  ...mondialOverview,

  images: [
    '/projects/mondial/1.jpg',
    '/projects/mondial/2.jpg',
    '/projects/mondial/3.jpg',
    '/projects/mondial/4.jpg',
  ],
  video: 'https://youtu.be/33Yn0vg6Jpo',

  meta: [
    { label: 'Client', value: 'Mondial' },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Manifesto Video' },
    { label: 'Date', value: '27 July 2022' },
  ],

  overview: `Glowgene is go to collagen jelly that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Collective
    
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Production Designer - Michelle Amadea

    Starring - Widika & Jourdy Pranata
    Director of Photography - Yoshua Gerry Sanjaya
    Offline Editor - Gus Dharma
    Online Editor - Michelle Amadea
    Colorist - Ivan Saputra Alam
    Sound Recordist & Designer - Cornelius Kurnia
    Music Composer - Abel Huray`,

  relatedWorks: [mrSunOverview, npureOverview],
}
