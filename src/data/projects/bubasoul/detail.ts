import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { bubasoulOverview } from './overview'

export const bubasoul: ProjectData = {
  ...bubasoulOverview,
  images: [
    '/projects/bubasoul/1.jpg',
    '/projects/bubasoul/2.jpg',
    '/projects/bubasoul/3.jpg',
    '/projects/bubasoul/4.jpg',
  ],
  video: 'https://www.youtube.com/watch?v=a5TKP3h_erk',

  meta: [
    { label: 'Client', value: 'Buba Soul' },
    {
      label: 'Role',
      value: `Concept
      Video Production`,
    },
    { label: 'Deliverables', value: 'Manifesto Video' },
    { label: 'Date', value: '21 February 2020' },
  ],

  overview: `Glowgene is go to collagen jelly that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Collective
    
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Art Director - Michelle Amadea
    Talent - Puspita Sari Dewi, Fernanda Ciandra & Andririn
   
    Director of Photography - Ivan Saputra Alam
    Offline Editor & Colorist - Ivan Saputra Alam
    Online Editor & Motion Graphics - Michelle Amadea
    Sound Mixing - Cornelius Kurnia
    Music Scoring - Abel Huray`,

  relatedWorks: [mrSunOverview, npureOverview],
}
