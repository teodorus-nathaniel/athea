import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { glowgeneOverview } from './overview'

export const glowgene: ProjectData = {
  ...glowgeneOverview,

  images: [
    '/projects/glowgene/1.jpg',
    '/projects/glowgene/2.jpg',
    '/projects/glowgene/3.jpg',
    '/projects/glowgene/4.jpg',
  ],
  video: '/projects/glowgene/video.mp4',

  meta: [
    { label: 'Client', value: "Glowgene" },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Manifesto Video' },
    { label: 'Date', value: '4 February 2021' },
  ],

  overview: `Glowgene is go to collagen jelly that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Collective
    
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Production Designer - Michelle Amadea
    
    Starring - Nadya & Braxton
    Director of Photography - Ivan Saputra Alam
    Offline Editor - Joseline Clarinda
    Online Editor, 3D Artist - Michelle Amadea
    Colorist - Ivan Saputra Alam`,

  relatedWorks: [mrSunOverview, npureOverview],
}
