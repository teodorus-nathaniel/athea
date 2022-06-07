import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { happyOverview } from './overview'

export const happy: ProjectData = {
  ...happyOverview,
  images: [
    '/projects/happy/1.jpg',
    '/projects/happy/2.jpg',
    '/projects/happy/3.jpg',
    '/projects/happy/4.jpg',
  ],
  video: 'https://youtu.be/k9couTf-HPc',


  meta: [
    { label: 'Artist', value: "Ardhito Pramono" },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Music Video' },
    { label: 'Date', value: '8 April 2020' },
  ],

  overview: `Glowgene is go to collagen jelly that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Visuals
    
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Production Designer - Michelle Amadea
    
    Director of Photography - Ivan Saputra Alam
    Offline Editor & Colorist - Ivan Saputra Alam
    Online Editor - Michelle Amadea`,

  relatedWorks: [mrSunOverview, npureOverview],
}
