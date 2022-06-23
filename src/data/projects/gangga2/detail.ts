import { ProjectData } from '#/data/types'
import { glowgeneOverview } from '../glowgene/overview'
import { npureOverview } from '../npure/overview'
import { gangga2Overview } from './overview'

export const gangga2: ProjectData = {
  ...gangga2Overview,
  images: [
    '/projects/gangga2/1.jpg',
    '/projects/gangga2/2.jpg',
    '/projects/gangga2/3.jpg',
    '/projects/gangga2/4.jpg',
  ],
  video: 'https://www.youtube.com/watch?v=54gDCqGyP5w',

  meta: [
    { label: 'Artist', value: "Gangga" },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Music Video' },
    { label: 'Date', value: '5 November 2021' },
  ],

  overview: `N'pure is a local skincare and beauty brand that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Visuals
    
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Production Designer - Michelle Amadea
    Craft Service - Muhajijah
    Cast - Gangga &  Nadja S. Hafizhah
   
    Director of Photography - Ivan Saputra Alam
    Offline Editor & Colorist - Ivan Saputra Alam
    Online Editor - Michelle Amadea`,

  relatedWorks: [npureOverview, glowgeneOverview],
}
