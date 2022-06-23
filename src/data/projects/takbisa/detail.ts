import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { takbisaOverview } from './overview'

export const takbisa: ProjectData = {
  ...takbisaOverview,
  images: [
    '/projects/takbisa/1.jpg',
    '/projects/takbisa/2.jpg',
    '/projects/takbisa/3.jpg',
    '/projects/takbisa/4.jpg',
  ],
  video: 'https://youtu.be/yU_KFpk3Sqk',


  meta: [
    { label: 'Singer', value: "Rahmania Astrini & Nino" },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Video' },
    { label: 'Date', value: '1 May 2020' },
  ],

  overview: `Glowgene is go to collagen jelly that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Visuals
    
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan & Trichia
    Production Designer - Michelle Amadea
    Director of Photography - Ivan Saputra Alam
    Offline Editor & Colorist - Ivan Saputra Alam
    Online Editor & 3D Artist - Michelle Amadea`,

  relatedWorks: [mrSunOverview, npureOverview],
}
