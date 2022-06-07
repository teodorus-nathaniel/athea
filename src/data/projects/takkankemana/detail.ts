import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { takkankemanaOverview } from './overview'

export const takkankemana: ProjectData = {
  ...takkankemanaOverview,
  images: [
    '/projects/takkankemana/1.jpg',
    '/projects/takkankemana/2.jpg',
    '/projects/takkankemana/3.jpg',
    '/projects/takkankemana/4.jpg',
  ],
  video: 'https://youtu.be/krz5jaGGj3s',


  meta: [
    { label: 'Artist', value: "The Overtunes" },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Video' },
    { label: 'Date', value: '15 March 2020' },
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

