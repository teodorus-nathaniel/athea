import Image1 from '#/assets/projects/mr-sun/1.png'
import Thumbnail from '#/assets/projects/mr-sun/thumbnail.png'
import { ProjectData } from '../types'

export const mrSun: ProjectData = {
  key: 'mr-sun',

  title: 'MR SUN',
  titleDesc: 'MR SUN',
  subtitle: 'MANIFESTO · DIGITAL · VIDEO · 2021',

  thumbnail: Thumbnail,
  images: [Image1],
  meta: [
    { label: 'Client', value: "N'pure" },
    { label: 'Deliverables', value: 'Manifesto Video' },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
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

  shareLinks: {
    link: 'https://google.com',
    whatsapp: 'https://google.com',
    others: 'https://google.com',
  },

  relatedWorks: [],
}
