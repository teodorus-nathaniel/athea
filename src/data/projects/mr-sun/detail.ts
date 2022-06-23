import { ProjectData } from '#/data/types'
import { glowgeneOverview } from '../glowgene/overview'
import { npureOverview } from '../npure/overview'
import { mrSunOverview } from './overview'

export const mrSun: ProjectData = {
  ...mrSunOverview,
  images: [
    '/projects/mr-sun/1.jpg',
    '/projects/mr-sun/2.jpg',
    '/projects/mr-sun/3.jpg',
    '/projects/mr-sun/4.jpg',
  ],
  video: 'https://youtu.be/MgxJukpTjIg',

  meta: [
    { label: 'Artist', value: 'Rendy Pandugo' },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Music Video' },
    { label: 'Date', value: '17 December 2020' },
  ],

  overview: `N'pure is a local skincare and beauty brand that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Visuals
    
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Production Designer - Michelle Amadea
   
    Director of Photography - Ivan Saputra Alam
    Offline Editor & Colorist - Ivan Saputra Alam
    Online Editor & Graphic Designer - Michelle Amadea`,

  relatedWorks: [npureOverview, glowgeneOverview],
}
