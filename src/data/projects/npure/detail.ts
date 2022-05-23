import Image1 from '#/assets/projects/npure/1.jpg'
import Image2 from '#/assets/projects/npure/2.jpg'
import Image3 from '#/assets/projects/npure/3.jpg'
import { ProjectData } from '../../types'
import { glowgeneOverview } from '../glowgene/overview'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from './overview'

export const npure: ProjectData = {
  ...npureOverview,
  images: [Image1, Image2, Image3],
  meta: [
    { label: 'Client', value: "N'pure" },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Manifesto Video' },
    { label: 'Date', value: '13 May 2021' },
  ],

  overview: `N'pure is a local skincare and beauty brand that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Collective
    
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Production Designer - Michelle Amadea
    Scriptwriter - Aaron Timothy Soeharto
    
    Starring - Abigail Gusmawan, Rayn Wijaya, Sebastian Teti, Latifah
    Supporting Talent - Odan, Holly Feristo, Yogie
    
    Director of Photography - Christopher Kuntjoro
    Offline Editor - Ida Bagus Gede Darma Putra
    Online Editor - Michelle Amadea
    Colorist - Riz Catleya
    Music Composer - Abel Huray
    Sound Designer - Lionel Judy`,

  relatedWorks: [glowgeneOverview, mrSunOverview],
}
