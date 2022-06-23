import { ProjectData } from '../../types'
import { glowgeneOverview } from '../glowgene/overview'
import { mrSunOverview } from '../mr-sun/overview'
import { tooandmorelvOverview } from './overview'

export const tooandmorelv: ProjectData = {
  ...tooandmorelvOverview,
  images: [
    '/projects/tooandmorelv/1.jpg',
    '/projects/tooandmorelv/2.jpg',
    '/projects/tooandmorelv/3.jpg',
    '/projects/tooandmorelv/4.jpg',
  ],

  video: 'https://youtu.be/uXyb6vtfsfs',

  meta: [
    { label: 'Artist', value: "Mikha Angelo" },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Lyric Video' },
    { label: 'Date', value: '23 October 2020' },
  ],

  overview: `N'pure is a local skincare and beauty brand that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Studios
  
    Director - Michelle Amadea
    Story Line - Ivan Saputra Alam
    Illustrator - Gladys Theresia, Dera Chandra
    Animator - Brigitta Sekar
    Compositing - Michelle Amadea`,

  relatedWorks: [glowgeneOverview, mrSunOverview],
}
