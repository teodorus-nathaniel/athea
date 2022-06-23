import { ProjectData } from '#/data/types'
import { glowgeneOverview } from '../glowgene/overview'
import { npureOverview } from '../npure/overview'
import { gangga3Overview } from './overview'

export const gangga3: ProjectData = {
  ...gangga3Overview,
  images: [
    '/projects/gangga3/1.jpg',
    '/projects/gangga3/2.jpg',
    '/projects/gangga3/3.jpg',
    '/projects/gangga3/4.jpg',
  ],
  video: 'https://www.youtube.com/watch?v=PZAny_DL2kY',

  meta: [
    { label: 'Artist', value: 'Gangga' },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Music Video' },
    { label: 'Date', value: '12 November 2021' },
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
