import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { vidixindomieOverview } from './overview'

export const vidixindomie: ProjectData = {
  ...vidixindomieOverview,

  images: [
    '/projects/vidixindomie/1.jpg',
    '/projects/vidixindomie/2.jpg',
    '/projects/vidixindomie/3.jpg',
    '/projects/vidixindomie/4.jpg',
  ],
  video: 'https://youtu.be/OTBpQUEWY50',

  meta: [
    { label: 'Singer', value: 'Vidi Aldiano' },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Manifesto Video' },
    { label: 'Date', value: '8 August 2020' },
  ],

  overview: `Glowgene is go to collagen jelly that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Collective
    
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Art Director - Michelle Amadea
    
    Traditional Dancer - Puspita Sari Dewi
    Dance Group - One Box
    Director of Photography - Ivan Saputra Alam
    Editor & Colorist - Ivan Saputra Alam
    Online Editor - Michelle Amadea`,

  relatedWorks: [mrSunOverview, npureOverview],
}
