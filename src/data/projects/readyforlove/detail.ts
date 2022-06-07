import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { readyforloveOverview } from './overview'

export const readyforlove: ProjectData = {
  ...readyforloveOverview,
  images: [
    '/projects/readyforlove/1.jpg',
    '/projects/readyforlove/2.jpg',
    '/projects/readyforlove/3.jpg',
    '/projects/readyforlove/4.jpg',
  ],
  video: 'https://youtu.be/Zt84b-tz0Zw',


  meta: [
    { label: 'Artist', value: "Vidi Aldiano feat. A.Nayaka, Raline Shah" },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Video' },
    { label: 'Date', value: '13 September 2020' },
  ],

  overview: `Glowgene is go to collagen jelly that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Visuals
    
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Production Designer - Michelle Amadea
    Choreographer - Donne Maula
    Performer - D'Soul Company
    Dancer - Ajeng, Elite, Karlita, Tri Cahyo Nugroho, Adit Kiki, Alenya, Mette, Ria, Vania, Kenk, Ulan Laumi, Raisa, Dennis Atiam, Hendra Aminata, Enza, Shinta, Sartika, Gritshaschaya 
    Director of Photography - Ivan Saputra Alam
    Offline Editor & Colorist - Ivan Saputra Alam
    Online Editor & Animator - Michelle Amadea`,

  relatedWorks: [mrSunOverview, npureOverview],
}

