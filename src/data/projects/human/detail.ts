import { ProjectData } from '../../types'
import { glowgeneOverview } from '../glowgene/overview'
import { mrSunOverview } from '../mr-sun/overview'
import { humanOverview } from './overview'

export const human: ProjectData = {
  ...humanOverview,
  images: [
    '/projects/human/1.jpg',
    '/projects/human/2.jpg',
    '/projects/human/3.jpg',
    '/projects/human/4.jpg',
  ],

  video: 'https://youtu.be/-brCaaSCYQA',

  meta: [
    { label: 'Artist', value: 'Mikha Angelo' },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Lyric Video' },
    { label: 'Date', value: '2 October 2020' },
  ],

  overview: `N'pure is a local skincare and beauty brand that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Studios
  
    Director - Michelle Amadea
    Story Line - Ivan Saputra Alam
    Illustrator - Jesselyn Callista, Gladys Theresia & Michelle Amadea
    Animator - Jennifer Karina & Michelle Amadea
    Compositing - Michelle Amadea`,

  relatedWorks: [glowgeneOverview, mrSunOverview],
}
