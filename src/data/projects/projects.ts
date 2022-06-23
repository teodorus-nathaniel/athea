import { ProjectData } from '../types'
import { bertahanlewatisenja } from './bertahanlewatisenja/detail'
import { bmhs } from './bmhs/detail'
import { caliente } from './caliente/detail'
import { glowgene } from './glowgene/detail'
import { happy } from './happy/detail'
import { herewegoagain } from './herewegoagain/detail'
import { home } from './home/detail'
import { innisfree } from './innisfree/detail'
import { instapeach } from './instapeach/detail'
import { jaz } from './jaz/detail'
import { masih } from './masih/detail'
import { midground } from './midground/detail'
import { mrSun } from './mr-sun/detail'
import { ninetofive } from './ninetofive/detail'
import { npure } from './npure/detail'
import { omo } from './omo/detail'
import { pedro } from './pedro/detail'
import { plazaavenue } from './plazaavenue/detail'
import { rainbowsprings } from './rainbow springs/detail'
import { readyforlove } from './readyforlove/detail'
import { run } from './run/detail'
import { shush } from './shush/detail'
import { somethinc } from './somethinc/detail'
import { takkankemana } from './takkankemana/detail'
import { theovertunes } from './the-overtunes/detail'
import { thedancecompany } from './thedancecompany/detail'
import { theheartyouhurt } from './theheartyouhurt/detail'
import { tooandmore } from './tooandmore/detail'
import { trashtalkin } from './trashtalkin/detail'
import { vidixindomie } from './vidixindomie/detail'
import { wadoow } from './wadoow/detail'
import { wowacc } from './wowacc/detail'

export const projects: ProjectData[] = [
  npure,
  glowgene,
  mrSun,
  theovertunes,
  bmhs,
  wowacc,
  thedancecompany,
  ninetofive,
  trashtalkin,
  shush,
  run,
  plazaavenue,
  somethinc,
  herewegoagain,
  tooandmore,
  midground,
  wadoow,
  happy,
  readyforlove,
  masih,
  theheartyouhurt,
  takkankemana,
  home,
  bertahanlewatisenja,
  caliente,
  jaz,
  pedro,
  omo,
  rainbowsprings,
  innisfree,
  vidixindomie,
]

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
    projects: [
      npure,
      theovertunes,
      thedancecompany,
      ninetofive,
      shush,
      trashtalkin,
      run,
      vidixindomie,
      herewegoagain,
      plazaavenue,
      tooandmore,
      happy,
      takkankemana,
      wadoow,
      masih,
      home,
      readyforlove,
      theheartyouhurt,
      bertahanlewatisenja,
      caliente,
      jaz,
      midground,
    ],
  },
  {
    group: 'Digital Commercial',
    projects: [npure, bmhs, innisfree, instapeach, somethinc, pedro, omo],
  },
  {
    group: 'Branding',
    projects: [mrSun],
  },
  {
    group: 'Corporate Videos',
    projects: [glowgene, rainbowsprings],
  },
  {
    group: 'Motion Graphics & Animation',
    projects: [glowgene],
  },
  {
    group: 'Events',
    projects: [wowacc],
  },
]

const sortLogic = (a: ProjectData, b: ProjectData) =>
  new Date(a.date) < new Date(b.date) ? 1 : -1

export const sortedProjectGroups: {
  group: string
  projects: ProjectData[]
}[] = projectGroups.map((group) => {
  const sortedProjects = [...group.projects]
  sortedProjects.sort(sortLogic)
  return {
    ...group,
    projects: sortedProjects,
  }
})

export let allProjects: ProjectData[] = []
projectGroups.forEach(({ projects: projectDatas }) => {
  allProjects.push(...projectDatas)
})
allProjects.sort(sortLogic)
