import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { bmhsOverview } from './overview'

export const bmhs: ProjectData = {
  ...bmhsOverview,
  images: [
    '/projects/the-overtunes/1.jpg',
    '/projects/the-overtunes/2.jpg',
    '/projects/the-overtunes/3.jpg',
  ],
  video: 'https://www.youtube.com/watch?v=-wtWbajnxD8',

  meta: [
    { label: 'Client', value: "Bundamedik Healthcare System" },
    {
      label: 'Role',
      value: 'Video Production'
    },
    { label: 'Deliverables', value: 'Manifesto Video' },
    { label: 'Date', value: '10 May 2021' },
  ],

  overview: `Glowgene is go to collagen jelly that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Collective
    
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Art Director - Michelle Amadea
    
    Talent -  Wenas, Hanna VM, Keiko Ananta, Julliete, Virly, Varisha
    
    Director of Photography - Ivan Saputra Alam
    Offline Editor - Ivan Saputra Alam
    Online Editor - Michelle Amadea
    Colorist - Ivan Saputra Alam`,

    relatedWorks: [mrSunOverview, npureOverview],
}
