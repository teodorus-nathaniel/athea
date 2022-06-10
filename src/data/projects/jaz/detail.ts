import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { jazOverview } from './overview'

export const jaz: ProjectData = {
  ...jazOverview,
  images: [
    '/projects/jaz/1.jpg',
    '/projects/jaz/2.jpg',
    '/projects/jaz/3.jpg',
    '/projects/jaz/4.jpg',
  ],
  video: 'https://youtu.be/FcpiF-_eSa8',


  meta: [
    { label: 'Artist', value: "Jaz Hidayat" },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Music Video' },
    { label: 'Date', value: '1 July 2019' },
  ],

  overview: `Glowgene is go to collagen jelly that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Moments
    
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Production Designer - Michelle Amadea

    Starring - Jaz Hidayat, Rachel Allison
    Director of Photography - Ivan Saputra Alam
    Offline Editor & Colorist - Ivan Saputra Alam
    Online Editor - Michelle Amadea`,

  relatedWorks: [mrSunOverview, npureOverview],
}
