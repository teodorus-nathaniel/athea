import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { ringgo5Overview } from './overview'

export const ringgo5: ProjectData = {
  ...ringgo5Overview,

  images: [
    '/projects/ringgo5/1.jpg',
    '/projects/ringgo5/2.jpg',
    '/projects/ringgo5/3.jpg',
    '/projects/ringgo5/4.jpg',
  ],
  video: 'https://youtu.be/24AjDoVJZg8',

  meta: [
    { label: 'Artist', value: 'Ringgo 5' },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Music Video' },
    { label: 'Date', value: '25 January 2019' },
  ],

  overview: `Glowgene is go to collagen jelly that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Visuals
    
    Director - Ivan Saputra Alam
    Producer - Reynaldo
    Production Designer - Bunga Cinta, Michelle Amadea, & Daniel Yuono
    Starring - Ringgo 5 & Jaz Rowe
    Director of Photography - Ivan Saputra Alam
    Editor & Colorist - Ivan Saputra Alam`,

  relatedWorks: [mrSunOverview, npureOverview],
}
