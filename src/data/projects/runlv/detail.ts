import { ProjectData } from '../../types'
import { glowgeneOverview } from '../glowgene/overview'
import { mrSunOverview } from '../mr-sun/overview'
import { runlvOverview } from './overview'

export const runlv: ProjectData = {
  ...runlvOverview,
  images: [
    '/projects/run(lv)/1.jpg',
    '/projects/run(lv)/2.jpg',
    '/projects/run(lv)/3.jpg',
    '/projects/run(lv)/4.jpg',
  ],

  video: 'https://youtu.be/bcWg40HrPPY',

  meta: [
    { label: 'Artist', value: "Mikha Angelo" },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Lyric Video' },
    { label: 'Date', value: '9 October 2020' },
  ],

  overview: `N'pure is a local skincare and beauty brand that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Studios
  
    Director - Michelle Amadea
    Story Line - Ivan Saputra Alam
    Illustrator - Michelle Amadea
    Animator - Brigitta Sekar
    Composoting - Michelle Amadea`,

  relatedWorks: [glowgeneOverview, mrSunOverview],
}
