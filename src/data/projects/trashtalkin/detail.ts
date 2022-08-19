import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { trashtalkinOverview } from './overview'

export const trashtalkin: ProjectData = {
  ...trashtalkinOverview,
  images: [
    '/projects/trashtalkin/1.jpg',
    '/projects/trashtalkin/2.jpg',
    '/projects/trashtalkin/3.jpg',
    '/projects/trashtalkin/4.jpg',
  ],
  video: 'https://youtu.be/CillMuYTbJg',

  meta: [
    { label: 'Artist', value: 'Ardhito Pramono' },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Music Video' },
    { label: 'Date', value: '28 February 2020' },
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
