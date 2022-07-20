import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { premierebeauteOverview } from './overview'

export const premierebeaute: ProjectData = {
  ...premierebeauteOverview,

  images: [
    '/projects/premierbeaute/1.jpg',
    '/projects/premierbeaute/2.jpg',
    '/projects/premierbeaute/3.jpg',
    '/projects/premierbeaute/4.jpg',
  ],
  video: 'https://youtu.be/0Hy2Z1OO6PM',

  meta: [
    { label: 'Client', value: 'Premiere Beaute' },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Manifesto Video' },
    { label: 'Date', value: '26 September 2021' },
  ],

  overview: `Glowgene is go to collagen jelly that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Collective
    
    Executive Producer - Christabel Fortunatus
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Production Designer - Michelle Amadea
    
    Starring - Amanda Manopo
    Director of Photography - Ivan Saputra Alam
    Offline Editor - Ivan Saputra Alam
    Assistant Editor - Joseline Clarinda
    Online Editor - Michelle Amadea
    Colorist - Ivan Saputra Alam
    Scoring - Abel Huray`,

  relatedWorks: [mrSunOverview, npureOverview],
}
