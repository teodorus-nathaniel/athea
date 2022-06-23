import { ProjectData } from '../../types'
import { glowgeneOverview } from '../glowgene/overview'
import { mrSunOverview } from '../mr-sun/overview'
import { fairytaleOverview } from './overview'

export const fairytale: ProjectData = {
  ...fairytaleOverview,
  images: [
    '/projects/fairytale/1.jpg',
    '/projects/fairytale/2.jpg',
    '/projects/fairytale/3.jpg',
    '/projects/fairytale/4.jpg',
  ],

  video: 'https://www.youtube.com/watch?v=yEwv_FKFGRE',

  meta: [
    { label: 'Artist', value: "Mikha Angelo" },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Lyric Video' },
    { label: 'Date', value: '30 October 2020' },
  ],

  overview: `N'pure is a local skincare and beauty brand that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Studios
  
    Director - Michelle Amadea
    Story Line - Ivan Saputra Alam
    Illustrator - Gladys Theresia & Dera Chandra
    Animator - Jennifer Karina
    Compositing - Michelle Amadea`,

  relatedWorks: [glowgeneOverview, mrSunOverview],
}
