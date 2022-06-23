import { ProjectData } from '../../types'
import { glowgeneOverview } from '../glowgene/overview'
import { mrSunOverview } from '../mr-sun/overview'
import { shotOverview } from './overview'

export const shot: ProjectData = {
  ...shotOverview,
  images: [
    '/projects/shot/1.jpg',
    '/projects/shot/2.jpg',
    '/projects/shot/3.jpg',
    '/projects/shot/4.jpg',
  ],

  video: 'https://youtu.be/I99g5PYuBps',

  meta: [
    { label: 'Artist', value: "Mikha Angelo" },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Lyric Video' },
    { label: 'Date', value: '25 September 2020' },
  ],

  overview: `N'pure is a local skincare and beauty brand that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Studios
  
    Director - Michelle Amadea
    Story Line - Ivan Saputra Alam
    Illustrator - Michelle Amadea
    Animator - Brigitta Sekar`,

  relatedWorks: [glowgeneOverview, mrSunOverview],
}
