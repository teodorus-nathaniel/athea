import { ProjectData } from '../../types'
import { glowgeneOverview } from '../glowgene/overview'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from './overview'

export const npure: ProjectData = {
  ...npureOverview,
  images: [
    '/projects/npure/1.jpg',
    '/projects/npure/2.jpg',
    '/projects/npure/3.jpg',
    '/projects/npure/4.jpg',
  ],
  video: 'https://www.youtube.com/watch?v=-wtWbajnxD8',

  meta: [
    { label: 'Client', value: "N'pure" },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Manifesto Video' },
    { label: 'Date', value: '27 November 2021' },
  ],

  overview: `N'pure is a local skincare and beauty brand that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Collective
    
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Production Designer - Michelle Amadea
    Starring - Isyana Sarasvati
    Supporting Talent - Java Stunt Team
    Director of Photography - Ivan Saputra Alam
    Offline Editor - Ivan Saputra Alam
    Online Editor & Roto Artist - Michelle Amadea
    Colorist - Ivan Saputra Alam
    Music Composer - Isyana Sarasvati`,

  relatedWorks: [glowgeneOverview, mrSunOverview],
}
