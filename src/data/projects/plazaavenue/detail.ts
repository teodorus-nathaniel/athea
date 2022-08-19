import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { plazaavenueOverview } from './overview'

export const plazaavenue: ProjectData = {
  ...plazaavenueOverview,
  images: [
    '/projects/plazaavenue/1.jpg',
    '/projects/plazaavenue/2.jpg',
    '/projects/plazaavenue/3.jpg',
    '/projects/plazaavenue/4.jpg',
  ],
  video: 'https://youtu.be/21TvQsAjkUI',

  meta: [
    { label: 'Singer', value: 'Ardhito Pramono' },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Music Video' },
    { label: 'Date', value: '1 April 2020' },
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
