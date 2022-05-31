import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { thedancecompanyOverview } from './overview'

export const thedancecompany: ProjectData = {
  ...thedancecompanyOverview,

  images: ['/projects/glowgene/1.png'],
  video: 'https://www.youtube.com/watch?v=-wtWbajnxD8',

  meta: [
    { label: 'Client', value: "Glowgene" },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Music Video' },
    { label: 'Date', value: '13 May 2021' },
  ],

  overview: `Glowgene is go to collagen jelly that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Collective
    
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
