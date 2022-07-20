import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { bmhsOverview } from './overview'

export const bmhs: ProjectData = {
  ...bmhsOverview,
  images: [
    '/projects/bmhs/1.jpg',
    '/projects/bmhs/2.jpg',
    '/projects/bmhs/3.jpg',
    '/projects/bmhs/4.jpg',
  ],
  video: 'https://youtu.be/-5R9SSc8fWM',

  meta: [
    { label: 'Client', value: 'Bundamedik Healthcare System' },
    {
      label: 'Role',
      value: 'Video Production',
    },
    { label: 'Deliverables', value: 'Manifesto Video' },
    { label: 'Date', value: '10 May 2022' },
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
