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
    group: 'Music Video',
    projects: [npure, npure],
  },
  {
    group: 'Digital Commerce',
    projects: [npure],
  },
  {
    group: 'Branding',
    projects: [mrSun, newProject],
  },
  {
    group: 'Corporate Video',
    projects: [glowgene],
  },
  {
    group: 'Corporate Video1',
    projects: [glowgene],
  },
  {
    group: 'Corporate Video2',
    projects: [glowgene],
  },
  {
    group: 'Corporate Video3',
    projects: [glowgene],
  },
]
