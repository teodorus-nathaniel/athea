import Project1 from '#/assets/photos/project-1.png'
import Project2 from '#/assets/photos/project-2.png'
import Project3 from '#/assets/photos/project-3.png'
import { ProjectOverviewData } from './types'

const works: {
  title: string
  hash: string
  projects: ProjectOverviewData[]
}[] = [
  {
    hash: 'music-video',
    title: 'Music Video',
    projects: [
      {
        title: "N'PURE X ISYANA",
        titleDesc: "ISYANA'S SKIN MELODY",
        subtitle: 'CAMPAIGN · DIGITAL · VIDEO · 2021',
        thumbnail: Project1,
      },
    ],
  },
  {
    hash: 'digital commerce',
    title: 'Digital Commerce',
    projects: [
      {
        title: 'GLOWGENE',
        titleDesc: 'COLLAGEN INTERSTELLAR UNIVERSE',
        subtitle: 'CAMPAIGN · DIGITAL · VIDEO · 2021',
        thumbnail: Project2,
      },
    ],
  },
  {
    hash: 'branding',
    title: 'Branding',
    projects: [
      {
        title: 'RENDY PANDUGO',
        titleDesc: 'MR SUN',
        subtitle: 'DIGITAL · MUSIC VIDEO · 2021',
        thumbnail: Project3,
      },
    ],
  },
  {
    hash: 'corporate-video',
    title: 'Corporate Video',
    projects: [
      {
        title: 'RENDY PANDUGOS',
        titleDesc: 'MR SUN',
        subtitle: 'DIGITAL · MUSIC VIDEO · 2021',
        thumbnail: Project3,
      },
    ],
  },
]
let allProjects: ProjectOverviewData[] = []
works.forEach(({ projects }) => {
  allProjects.push(...projects)
})
works.unshift({ title: 'All Work', hash: 'all', projects: allProjects })
export default works
