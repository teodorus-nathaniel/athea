import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { ganangmamikatOverview } from './overview'

export const ganangmamikat: ProjectData = {
  ...ganangmamikatOverview,
  images: [
    '/projects/ganang/1.jpg',
    '/projects/ganang/2.jpg',
    '/projects/ganang/3.jpg',
    '/projects/ganang/4.jpg',
  ],
  video: 'https://www.youtube.com/watch?v=ZXmOUvUnPCI',


  meta: [
    { label: 'Client', value: "Ganang Mamikat" },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Video' },
    { label: 'Date', value: '24 June 2019' },
  ],

  overview: `Glowgene is go to collagen jelly that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Visuals
    
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Art Director &  Make Up Artist - Michelle Amadea
    Talent - Gabriella Citra & Ghinna
    Director of Photography - Ivan Saputra Alam
    Offline Editor & Colorist - Ivan Saputra Alam
    Online Editor - Michelle Amadea`,

  relatedWorks: [mrSunOverview, npureOverview],
}

