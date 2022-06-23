import { ProjectData } from '../../types'
import { glowgeneOverview } from '../glowgene/overview'
import { mrSunOverview } from '../mr-sun/overview'
import { azarineOverview } from './overview'

export const azarine: ProjectData = {
  ...azarineOverview,
  images: [
    '/projects/azarine/1.jpg',
    '/projects/azarine/2.jpg',
    '/projects/azarine/3.jpg',
    '/projects/azarine/4.jpg',
  ],

  video: '/projects/azarine/video.mp4',

  meta: [
    { label: 'Client', value: "Azarine" },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Corporate Video' },
    { label: 'Date', value: '23 November 2021' },
  ],

  overview: `N'pure is a local skincare and beauty brand that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Collective
  
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Production Designer - Michelle Amadea
    Scriptwriter - Aaron Timothy Soeharto
    Starring - Abigail Gusmawan, Rayn Wijaya, Sebastian Teti & Latifah
    Supporting Talent - Odan, Holly Feristo, Yogie

    Director of Photography - Christoper Kuntjoro
    Offline Editor - Ida Bagus Gede Darma Putra
    Colorist - Riz Catleya
    Music Composer - Abel Huray
    Sound Designer - Lionel Judy
    Sound Recordist - Lionel Judy
    Online Editor - Michelle Amadea`,

  relatedWorks: [glowgeneOverview, mrSunOverview],
}
