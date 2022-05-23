import { ProjectData } from '../types'
import { glowgene } from './glowgene/detail'
import { mrSun } from './mr-sun/detail'
import { newProject } from './new-project/detail'
import { npure } from './npure/detail'

export const projects: ProjectData[] = [npure, glowgene, mrSun, newProject]
export const projectKeys: { [key: string]: ProjectData } = projects.reduce<{
  [key: string]: ProjectData
}>((acc, project) => {
  acc[project.key] = project
  return acc
}, {})

export const projectGroups: {
  group: string
  projects: ProjectData[]
}[] = [
  {
    group: 'Music Videos',
    projects: [npure, npure],
  },
  {
    group: 'Digital Commercial',
    projects: [npure],
  },
  {
    group: 'Branding',
    projects: [mrSun, newProject],
  },
  {
    group: 'Corporate Videos',
    projects: [glowgene],
  },
  {
    group: 'Motion Graphics & Animation',
    projects: [glowgene],
  },
  {
    group: 'Events',
    projects: [glowgene],
  },
]
