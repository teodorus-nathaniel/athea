import { ProjectData } from '../../types'
import { glowgeneOverview } from '../glowgene/overview'
import { mrSunOverview } from '../mr-sun/overview'
import { theovertunesOverview } from './overview'

export const theovertunes: ProjectData = {
  ...theovertunesOverview,
  images: [
    '/projects/the-overtunes/1.jpg',
    '/projects/the-overtunes/2.jpg',
    '/projects/the-overtunes/3.jpg',
  ],
  video: 'https://www.youtube.com/watch?v=-wtWbajnxD8',

  meta: [
    { label: 'Client', value: 'The Overtunes' },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Music Video' },
    { label: 'Date', value: '22 February 2022' },
  ],

  overview: `N'pure is a local skincare and beauty brand that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Collective
    
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Production Designer - Michelle Amadea
    
    Starring - Dylan Armand, Alyssa Abidin, Reuben Nathaniel
    Dancer Choreographer - Dennis Atiam
    Performer - Dennis Atiam, Lucky Julian , Boben Kristian, Shannia, Thannia, Elvina Kimberly, Javelin Fiany
    Director of Photography - Ivan Saputra Alam
    Offline Editor - Ivan Saputra Alam
    Online Editor - Michelle Amadea
    Colorist - Ivan Saputra Alam`,

  relatedWorks: [glowgeneOverview, mrSunOverview],
}
