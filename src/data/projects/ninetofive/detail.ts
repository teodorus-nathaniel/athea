import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { ninetofiveOverview } from './overview'

export const ninetofive: ProjectData = {
  ...ninetofiveOverview,
  images: [
    '/projects/ninetofive/1.jpg',
    '/projects/ninetofive/2.jpg',
    '/projects/ninetofive/3.jpg',
    '/projects/ninetofive/4.jpg',
  ],
  video: 'https://youtu.be/wCiUm5XJ_LY',


  meta: [
    { label: 'Artist', value: "Ardhito Pramono" },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Video' },
    { label: 'Date', value: '9 March 2021' },
  ],

  overview: `Glowgene is go to collagen jelly that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Moments
    
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Production Designer - Michelle Amadea
    Scriptwriter - Aaron Timothy Soeharto
    
    Starring - Abigail Gusmawan, Rayn Wijaya, Sebastian Teti, Latifah
    Supporting Talent - Odan, Holly Feristo, Yogie
    
    Director of Photography - Christopher Kuntjoro
    Offline Editor - Ida Bagus Gede Darma Putra
    Online Editor - Michelle Amadea
    Colorist - Riz Catleya
    Music Composer - Abel Huray
    Sound Designer - Lionel Judy`,

  relatedWorks: [mrSunOverview, npureOverview],
}
