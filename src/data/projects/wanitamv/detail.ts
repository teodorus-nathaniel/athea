import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { wanitamvOverview } from './overview'

export const wanitamv: ProjectData = {
  ...wanitamvOverview,
  images: [
    '/projects/wanitamv/1.jpg',
    '/projects/wanitamv/2.jpg',
    '/projects/wanitamv/3.jpg',
    '/projects/wanitamv/4.jpg',
  ],
  video: 'https://youtu.be/VrMrvR_Hv1g',


  meta: [
    { label: 'Artist', value: "Rossa" },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Video' },
    { label: 'Date', value: '24 September 2021' },
  ],

  overview: `Glowgene is go to collagen jelly that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Visuals
    
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan & Rufus Azarya
    Production Designer - Michelle Amadea
    Director of Photography - Ivan Saputra Alam
    Offline Editor & Colorist - Ivan Saputra Alam
    Assistant Editor - Joseline Clarinda
    Online Editor - Michelle Amadea`,

  relatedWorks: [mrSunOverview, npureOverview],
}

