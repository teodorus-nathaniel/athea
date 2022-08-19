import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { bertahanlewatisenjaOverview } from './overview'

export const bertahanlewatisenja: ProjectData = {
  ...bertahanlewatisenjaOverview,
  images: [
    '/projects/bertahanlewatisenja/1.jpg',
    '/projects/bertahanlewatisenja/2.jpg',
    '/projects/bertahanlewatisenja/3.jpg',
    '/projects/bertahanlewatisenja/4.jpg',
  ],
  video: 'https://youtu.be/VJtxlayl3WA',

  meta: [
    { label: 'Artist', value: 'Vidi Aldiano' },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Music Video' },
    { label: 'Date', value: '17 April 2020' },
  ],

  overview: `Glowgene is go to collagen jelly that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Moments
    
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Production Designer - Michelle Amadea
    
    Director of Photography - Ivan Saputra Alam
    Offline Editor & Colorist - Ivan Saputra Alam
    Online Editor - Michelle Amadea`,

  relatedWorks: [mrSunOverview, npureOverview],
}
