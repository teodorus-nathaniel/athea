import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { thedancecompanyOverview } from './overview'

export const thedancecompany: ProjectData = {
  ...thedancecompanyOverview,

  images: [
    '/projects/tdc/1.jpg',
    '/projects/tdc/2.jpg',
    '/projects/tdc/3.jpg',
    '/projects/tdc/4.jpg',
  ],
  video: 'https://www.youtube.com/watch?v=zKI6YJ6tV9Q',

  meta: [
    { label: 'Artist', value: 'The Dance Company' },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Music Video' },
    { label: 'Date', value: '25 November 2021' },
  ],

  overview: `Glowgene is go to collagen jelly that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Visuals
    
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Production Designer - Michelle Amadea
    
    Starring - Ibrahim Risyad, Naomi, Jihane Almira
    Supporting Talent - Hidayati, Alsantyya, Annisa
    Director of Photography - Ivan Saputra Alam
    Offline Editor & Colorist - Ivan Saputra Alam
    Online Editor & Graphic - Michelle Amadea`,

  relatedWorks: [mrSunOverview, npureOverview],
}
