import { ProjectData } from '#/data/types'
import { glowgeneOverview } from '../glowgene/overview'
import { npureOverview } from '../npure/overview'
import { thislovewillneverendOverview } from './overview'

export const thislovewillneverend: ProjectData = {
  ...thislovewillneverendOverview,
  images: [
    '/projects/gangga4/1.jpg',
    '/projects/gangga4/2.jpg',
    '/projects/gangga4/3.jpg',
    '/projects/gangga4/4.jpg',
  ],
  video: 'https://youtu.be/uF6EoF05AjY',

  meta: [
    { label: 'Artist', value: 'Gangga' },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Music Video' },
    { label: 'Date', value: '22 October 2021' },
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
