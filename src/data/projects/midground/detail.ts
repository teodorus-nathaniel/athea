import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { midgroundOverview } from './overview'

export const midground: ProjectData = {
  ...midgroundOverview,
  images: [
    '/projects/midground/1.jpg',
    '/projects/midground/2.jpg',
    '/projects/midground/3.jpg',
    '/projects/midground/4.jpg',
  ],
  video: 'https://youtu.be/PPp-lcEXR7c',


  meta: [
    { label: 'Singer', value: "Mikha Angelo" },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Video' },
    { label: 'Date', value: '23 August 2020' },
  ],

  overview: `Glowgene is go to collagen jelly that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `A trilogy by Athea Visuals
    
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Production Designer - Michelle Amadea
    Director of Photography - Ivan Saputra Alam
    Offline Editor - Ivan Saputra Alam
    Online Editor & 3D Artist - Michelle Amadea
    Colorist - Ivan Saputra Alam`,

  relatedWorks: [mrSunOverview, npureOverview],
}
