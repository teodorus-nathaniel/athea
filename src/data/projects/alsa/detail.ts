import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { alsaOverview } from './overview'

export const alsa: ProjectData = {
  ...alsaOverview,

  images: [
    '/projects/alsa/1.jpg',
    '/projects/alsa/2.jpg',
    '/projects/alsa/3.jpg',
    '/projects/alsa/4.jpg',
  ],
  video: 'https://www.youtube.com/watch?v=4cVf7DigatU',

  meta: [
    { label: 'Artist', value: 'Alsa' },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Music Video' },
    { label: 'Date', value: '23 Juni 2021' },
  ],

  overview: `Glowgene is go to collagen jelly that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Visuals
    
    Director - Cathleen Angela Chandra
    Producer - Naphtali Ivan
    Production Designer - Michelle Amadea
    Associate Producer - Rania Sulfa
    Supporting Cast - Shekinna Arifin & Jordan
    Director of Photography - Christopher Kuntjoro
    Offline Editor - Joseline Clarinda
    Online Editor & Graphic - Michelle Amadea
    Colorist - Fabian Sutrisna`,

  relatedWorks: [mrSunOverview, npureOverview],
}
