import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { kksOverview } from './overview'

export const kks: ProjectData = {
  ...kksOverview,

  images: [
    '/projects/kks/1.jpg',
    '/projects/kks/2.jpg',
    '/projects/kks/3.jpg',
    '/projects/kks/4.jpg',
  ],
  video: 'https://youtu.be/eXnuPX7CQNI',

  meta: [
    { label: 'Artist', value: 'Naura Ayu' },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Music Video' },
    { label: 'Date', value: '19 March 2021' },
  ],

  overview: `Glowgene is go to collagen jelly that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Visuals
    
    Executive Producer - Ivan Saputra Alam
    Director - Maria Tania
    Producer - Naphtali Ivan
    Production Designer - Michelle Amadea
    Starring - Naura Ayu & Rafly Altama
    Director of Photography - Christoper Kuntjoro
    Offline Editor - Joseline Clarinda
    Online Editor & Graphic - Michelle Amadea
    Colorist - Fabian Sutrisna`,

  relatedWorks: [mrSunOverview, npureOverview],
}
