import { ProjectData } from '../../types'
import { glowgeneOverview } from '../glowgene/overview'
import { mrSunOverview } from '../mr-sun/overview'
import { middlegroundlvOverview } from './overview'

export const middlegroundlv: ProjectData = {
  ...middlegroundlvOverview,
  images: [
    '/projects/middleground(lv)/1.jpg',
    '/projects/middleground(lv)/2.jpg',
    '/projects/middleground(lv)/3.jpg',
    '/projects/middleground(lv)/4.jpg',
  ],

  video: 'https://youtu.be/iKCvjnYClEo',

  meta: [
    { label: 'Client', value: "Kopi Chuseyo" },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Web Series' },
    { label: 'Date', value: '16 October 2020' },
  ],

  overview: `N'pure is a local skincare and beauty brand that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Studios
  
    Director - Michelle Amadea
    Story Line - Ivan Saputra Alam
    Illustrator - Jesselyn Callista, Muthia Mahfumah & Michelle Amadea
    Animator - Jennifer Karina
    Compositing - Michelle Amadea`,

  relatedWorks: [glowgeneOverview, mrSunOverview],
}
