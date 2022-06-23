import { ProjectData } from '../../types'
import { glowgeneOverview } from '../glowgene/overview'
import { mrSunOverview } from '../mr-sun/overview'
import { amateurOverview } from './overview'

export const amateur: ProjectData = {
  ...amateurOverview,
  images: [
    '/projects/amateur/1.jpg',
    '/projects/amateur/2.jpg',
    '/projects/amateur/3.jpg',
    '/projects/amateur/4.jpg',
  ],



  video: 'https://youtu.be/65SK9jFi_tw',

  meta: [
    { label: 'Artist', value: "Mikha Angelo" },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Lyric Video' },
    { label: 'Date', value: '11 September 2020' },
  ],

  overview: `N'pure is a local skincare and beauty brand that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Studios
  
    Director - Michelle Amadea
    Story Line - Ivan Saputra Alam
    Illustrator - Jesselyn Callista & Gladys Theresia
    Animator - Michelle Amadea & Briggita Sekar
    Compositing - Michelle Amadea`,

  relatedWorks: [glowgeneOverview, mrSunOverview],
}
