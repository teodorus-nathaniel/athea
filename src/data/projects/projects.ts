import { ProjectData } from '../types'
import { glowgene } from './glowgene'
import { mrSun } from './mr-sun'
import { npure } from './npure'

export const projectKeys: { [key: string]: ProjectData } = {
  npure,
  glowgene,
  'mr-sun': mrSun,
}
export const projects: ProjectData[] = Object.values(projectKeys)

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
