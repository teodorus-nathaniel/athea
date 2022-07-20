import { ProjectData } from '../../types'
import { glowgeneOverview } from '../glowgene/overview'
import { mrSunOverview } from '../mr-sun/overview'
import { sigOverview } from './overview'

export const sig: ProjectData = {
  ...sigOverview,
  images: [
    '/projects/sig/1.jpg',
    '/projects/sig/2.jpg',
    '/projects/sig/3.jpg',
    '/projects/sig/4.jpg',
  ],

  video: '/projects/sig/video.mp4',

  meta: [
    { label: 'Client', value: 'Semen Group Indonesia' },
    {
      label: 'Role',
      value: `Concept
        Motion Graphic Video`,
    },
    { label: 'Deliverables', value: 'Motion Graphic' },
    { label: 'Date', value: '17 June 2020' },
  ],

  overview: `N'pure is a local skincare and beauty brand that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Collective
  
    Illustrator - Gladys Theresia & Dera Chandra
    Motion Graphic - Michelle Amadea, Joseline Clarinda & Briggita Sekar`,

  relatedWorks: [glowgeneOverview, mrSunOverview],
}
