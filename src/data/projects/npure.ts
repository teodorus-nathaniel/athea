import Image1 from '#/assets/projects/npure/1.jpg'
import Image2 from '#/assets/projects/npure/2.jpg'
import Image3 from '#/assets/projects/npure/3.jpg'
import Thumbnail from '#/assets/projects/npure/thumbnail.jpg'
import { ProjectData } from '../types'
import { glowgene } from './glowgene'

export const npure: ProjectData = {
  title: "N'PURE X ISYANA",
  titleDesc: "ISYANA'S SKIN MELODY",
  subtitle: 'MANIFESTO · DIGITAL · VIDEO · 2021',

  thumbnail: Thumbnail,
  images: [Image1, Image2, Image3],
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

  relatedWorks: [glowgene, glowgene, glowgene, glowgene],
}
