import { ProjectData } from '../../types'
import { glowgeneOverview } from '../glowgene/overview'
import { mrSunOverview } from '../mr-sun/overview'
import { darlieOverview } from './overview'

export const darlie: ProjectData = {
  ...darlieOverview,
  images: [
    '/projects/darlie/1.jpg',
    '/projects/darlie/2.jpg',
    '/projects/darlie/3.jpg',
    '/projects/darlie/4.jpg',
  ],

  video: 'https://youtu.be/XMc12TL_x8M',

  meta: [
    { label: 'Client', value: "Darlie Indonesia" },
    {
      label: 'Role',
      value: `Concept
        3D Campaign`,
    },
    { label: 'Deliverables', value: '3D Campaign' },
    { label: 'Date', value: '23 March 2022' },
  ],

  overview: `N'pure is a local skincare and beauty brand that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Studios
  
    Director & Animator - Michelle Amadea
    3D Modeling - Joseline Clarinda
    Project Manager - Naphtali Ivan
    Voice Over - Indo Voice Over
    Music Scoring - Abel Huray
    `,

  relatedWorks: [glowgeneOverview, mrSunOverview],
}
