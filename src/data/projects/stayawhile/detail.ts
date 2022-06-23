import { ProjectData } from '../../types'
import { glowgeneOverview } from '../glowgene/overview'
import { mrSunOverview } from '../mr-sun/overview'
import { stayawhileOverview } from './overview'

export const stayawhile: ProjectData = {
  ...stayawhileOverview,
  images: [
    '/projects/stayawhile/1.jpg',
    '/projects/stayawhile/2.jpg',
    '/projects/stayawhile/3.jpg',
    '/projects/stayawhile/4.jpg',
  ],

  video: 'https://www.youtube.com/watch?v=pukCSAOOnyg',

  meta: [
    { label: 'Artist', value: 'Mikha Angelo' },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Lyric Video' },
    { label: 'Date', value: '18 September 2020' },
  ],

  overview: `N'pure is a local skincare and beauty brand that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Studios
  
    Director - Michelle Amadea
    Story Line - Ivan Saputra Alam
    Illustrator - Michelle Amadea, Jesselyn Callista & Muthia Mahfumah
    Animator - Michelle Amadea, Jennifer Karina
    Compositing - Michelle Amadea`,

  relatedWorks: [glowgeneOverview, mrSunOverview],
}
