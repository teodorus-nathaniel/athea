import { ProjectData } from '../../types'
import { glowgeneOverview } from '../glowgene/overview'
import { mrSunOverview } from '../mr-sun/overview'
import { beatthesunOverview } from './overview'

export const beatthesun: ProjectData = {
  ...beatthesunOverview,
  images: [
    '/projects/beatthesun/1.jpg',
    '/projects/beatthesun/2.jpg',
    '/projects/beatthesun/3.jpg',
    '/projects/beatthesun/4.jpg',
  ],
  video: 'https://youtu.be/xvl6-jZ510A',

  meta: [
    { label: 'Client', value: "N'pure" },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Manifesto Video' },
    { label: 'Date', value: '25 June 2021' },
  ],

  overview: `N'pure is a local skincare and beauty brand that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Collective
    
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Production Designer - Michelle Amadea
    Starring - Chicco Kurniawan & Sabreena Dressler
    Supporting Talent - Elvina Kimberly, Maverine Hearti, Javeline Fiany & Grace Priskila
    Director of Photography - Ivan Saputra Alam
    Offline Editor - Ivan Saputra Alam
    Online Editor & 3D Artist - Michelle Amadea
    Colorist - Ivan Saputra Alam
    Music Composer - Isyana Sarasvati`,

  relatedWorks: [glowgeneOverview, mrSunOverview],
}
