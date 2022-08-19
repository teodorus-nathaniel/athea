import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { tooandmoreOverview } from './overview'

export const tooandmore: ProjectData = {
  ...tooandmoreOverview,
  images: [
    '/projects/tooandmore/1.jpg',
    '/projects/tooandmore/2.jpg',
    '/projects/tooandmore/3.jpg',
    '/projects/tooandmore/4.jpg',
  ],
  video: 'https://youtu.be/aGlWwPrrj-0',

  meta: [
    { label: 'Artist', value: 'Mikha Angelo' },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Music Video' },
    { label: 'Date', value: '2 September 2020' },
  ],

  overview: `Glowgene is go to collagen jelly that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `A trilogy by Athea Visuals
    
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Production Designer - Michelle Amadea
    
    Director of Photography - Ivan Saputra Alam
    Offline Editor - Ivan Saputra Alam
    Online Editor & 3D Artist - Michelle Amadea
    Colorist - Ivan Saputra Alam`,

  relatedWorks: [mrSunOverview, npureOverview],
}
