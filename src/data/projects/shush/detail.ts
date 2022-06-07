import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { shushOverview } from './overview'

export const shush: ProjectData = {
  ...shushOverview,
  images: [
    '/projects/shush/1.jpg',
    '/projects/shush/2.jpg',
    '/projects/shush/3.jpg',
    '/projects/shush/4.jpg',
  ],
  video: 'https://youtu.be/JxTxr4_YFAk',


  meta: [
    { label: 'Singer', value: "Rahmania Astrini" },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Video' },
    { label: 'Date', value: '20 January 2021' },
  ],

  overview: `Glowgene is go to collagen jelly that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Visuals
    
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan & Trichia
    Production Designer - Michelle Amadea
    
    Starring - Theo Supple
    Dance Choreographer - Donne Maulana
    Performer - D'Soul Company, Shandra Bahari
    
    Director of Photography - Ivan Saputra Alam
    Offline Editor & Colorist - Ivan Saputra Alam
    Online Editor - Michelle Amadea`,

  relatedWorks: [mrSunOverview, npureOverview],
}
