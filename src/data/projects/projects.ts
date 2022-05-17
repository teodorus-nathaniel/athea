import { ProjectData } from '../types'
import { glowgene } from './glowgene'
import { mrSun } from './mr-sun'
import { npure } from './npure'

export const projects: ProjectData[] = [npure, glowgene, mrSun]
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
    projects: [mrSun],
  },
  {
    group: 'Corporate Video',
    projects: [glowgene],
  },
]
