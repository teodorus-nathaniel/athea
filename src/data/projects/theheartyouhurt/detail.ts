import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { theheartyouhurtOverview } from './overview'

export const theheartyouhurt: ProjectData = {
  ...theheartyouhurtOverview,
  images: [
    '/projects/theheartyouhurt/1.jpg',
    '/projects/theheartyouhurt/2.jpg',
    '/projects/theheartyouhurt/3.jpg',
    '/projects/theheartyouhurt/4.jpg',
  ],
  video: 'https://youtu.be/kAGIwuA1Hvs',


  meta: [
    { label: 'Artist', value: "Rossa" },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Video' },
    { label: 'Date', value: '31 March 2020' },
  ],

  overview: `Glowgene is go to collagen jelly that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Visuals
    
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Production Designer - Michelle Amadea
    
    Starring - Lee Min Ho, Dion Wiyoko
    Director of Photography - Ivan Saputra Alam
    Offline Editor & Colorist - Ivan Saputra Alam
    Online Editor - Michelle Amadea
    Sound Designer - Ivan Saputra Alam`,

  relatedWorks: [mrSunOverview, npureOverview],
}

