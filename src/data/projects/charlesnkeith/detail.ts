import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { charlesnkeithOverview } from './overview'

export const charlesnkeith: ProjectData = {
  ...charlesnkeithOverview,
  images: [
    '/projects/ck/1.jpg',
    '/projects/ck/2.jpg',
    '/projects/ck/3.jpg',
    '/projects/ck/4.jpg',
  ],
  video: '/projects/ck/video.mp4',


  meta: [
    { label: 'Client', value: "Charles & Keith Indonesia" },
    {
      label: 'Role',
      value: 'Video Production',
    },
    { label: 'Deliverables', value: 'Music Video' },
    { label: 'Date', value: '21 December 2019' },
  ],

  overview: `Glowgene is go to collagen jelly that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Visuals
    
    Director - Ivan Saputra Alam
    Talent - Titan Tyra
    Director of Photography - Ivan Saputra Alam
    Offline Editor, Colorist - Ivan Saputra Alam`,

  relatedWorks: [mrSunOverview, npureOverview],
}

