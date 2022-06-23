import { ProjectData } from '../../types'
import { glowgeneOverview } from '../glowgene/overview'
import { mrSunOverview } from '../mr-sun/overview'
import { accbidOverview } from './overview'

export const accbid: ProjectData = {
  ...accbidOverview,
  images: [
    '/projects/accbid/1.jpg',
    '/projects/accbid/2.jpg',
    '/projects/accbid/3.jpg',
    '/projects/accbid/4.jpg',
  ],

  video: 'https://www.youtube.com/watch?v=SDEJs06Hs1w',

  meta: [
    { label: 'Client', value: 'Astra Credit Company' },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Corporate Video' },
    { label: 'Date', value: '19 February 2019' },
  ],

  overview: `N'pure is a local skincare and beauty brand that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Collective
  
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Art Director - Michelle Amadea
    Director of Photography - Ivan Saputra Alam
    Offline Editor & Colorist - Ivan Saputra Alam
    Online Editor - Michelle Amadea
    Voice Over - Kristo Immanuel
    Music Scoring - Abel Huray
    Sound Designer - Cornelius Kurnia`,

  relatedWorks: [glowgeneOverview, mrSunOverview],
}
