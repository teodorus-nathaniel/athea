import { ProjectData } from '../../types'
import { glowgeneOverview } from '../glowgene/overview'
import { mrSunOverview } from '../mr-sun/overview'
import { wanitaOverview } from './overview'

export const wanita: ProjectData = {
  ...wanitaOverview,
  images: [
    '/projects/wanita/1.jpg',
    '/projects/wanita/2.jpg',
    '/projects/wanita/3.jpg',
    '/projects/wanita/4.jpg',
  ],

  video: 'https://youtu.be/NpECdhlBCxc',

  meta: [
    { label: 'Artist', value: "Rossa" },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Lyric Video' },
    { label: 'Date', value: '16 July 2021' },
  ],

  overview: `N'pure is a local skincare and beauty brand that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Studios
  
    Director - Michelle Amadea
    Illustrator - Michelle Amadea
    Animator - Michelle Amadea`,

  relatedWorks: [glowgeneOverview, mrSunOverview],
}
