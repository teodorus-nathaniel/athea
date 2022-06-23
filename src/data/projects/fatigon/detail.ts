import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { fatigonOverview } from './overview'

export const fatigon: ProjectData = {
  ...fatigonOverview,
  images: [
    '/projects/fatigon/1.jpg',
    '/projects/fatigon/2.jpg',
    '/projects/fatigon/3.jpg',
    '/projects/fatigon/4.jpg',
  ],
  video: '/project/fatigon/video',

  meta: [
    { label: 'Client', value: 'Fatigon Promuno' },
    {
      label: 'Role',
      value: 'Video Production',
    },
    { label: 'Deliverables', value: 'Video' },
    { label: 'Date', value: '11 March 2021' },
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
