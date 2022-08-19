import { ProjectData } from '../types'
import { accbid } from './accbid/detail'
import { afterhours } from './afterhours/detail'
import { amateur } from './amateur/detail'
import { apple } from './apple/detail'
import { azarine } from './azarine/detail'
import { beatthesun } from './beatthesun/detail'
import { bertahanlewatisenja } from './bertahanlewatisenja/detail'
import { bmhs } from './bmhs/detail'
import { bubasoul } from './bubasoul/detail'
import { buccheri } from './buccheri/detail'
import { caliente } from './caliente/detail'
import { darlie } from './darlie/detail'
import { eastventure } from './eastventure/detail'
import { fairytale } from './fairytale/detail'
import { fatigon } from './fatigon/detail'
import { forever } from './forever/detail'
import { ganangmamikat } from './ganangmamikat/detail'
import { glowgene } from './glowgene/detail'
import { happy } from './happy/detail'
import { herewegoagain } from './herewegoagain/detail'
import { home } from './home/detail'
import { human } from './human/detail'
import { ifw } from './ifw/detail'
import { innisfree } from './innisfree/detail'
import { instapeach } from './instapeach/detail'
import { iomi1 } from './iomi1/detail'
import { iomi2 } from './iomi2/detail'
import { jbp } from './jbp/detail'
import { kanda } from './kanda/detail'
import { kopichuseyo } from './kopichuseyo/detail'
import { lafresco } from './lafresco/detail'
import { larasatie } from './larasatie/detail'
import { lavishbrow } from './lavishbrow/detail'
import { meratus } from './meratus/detail'
import { midground } from './midground/detail'
import { mondial } from './mondial/detail'
import { mrSun } from './mr-sun/detail'
import { ninetofive } from './ninetofive/detail'
import { npure } from './npure/detail'
import { orori } from './orori/detail'
import { pedro } from './pedro/detail'
import { plazaavenue } from './plazaavenue/detail'
import { premierebeaute } from './premierbeaute/detail'
import { rainbowsprings } from './rainbow springs/detail'
import { readyforlove } from './readyforlove/detail'
import { remington } from './remington/detail'
import { ringgo5 } from './ringgo5/detail'
import { run } from './run/detail'
import { runlv } from './runlv/detail'
import { seconddate } from './seconddatelaunch/detail'
import { shot } from './shot/detail'
import { shush } from './shush/detail'
import { sig } from './sig/detail'
import { somethinc } from './somethinc/detail'
import { stayawhile } from './stayawhile/detail'
import { takkankemana } from './takkankemana/detail'
import { theovertunes } from './the-overtunes/detail'
import { thedancecompany } from './thedancecompany/detail'
import { theheartyouhurt } from './theheartyouhurt/detail'
import { thislovewillneverend } from './thislovewillneverend/detail'
import { tooandmore } from './tooandmore/detail'
import { trashtalkin } from './trashtalkin/detail'
import { vicari1 } from './vicari1/detail'
import { vicari3 } from './vicari3/detail'
import { vidixindomie } from './vidixindomie/detail'
import { wadoow } from './wadoow/detail'
import { waitingforyou } from './waitingforyou/detail'
import { whiskeybottle } from './whiskeybottle/detail'
import { wowacc } from './wowacc/detail'

export const projects: ProjectData[] = [
  npure,
  sig,
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
  apple,
  wadoow,
  happy,
  readyforlove,
  theheartyouhurt,
  takkankemana,
  home,
  bertahanlewatisenja,
  caliente,
  eastventure,
  pedro,
  orori,
  accbid,
  iomi1,
  iomi2,
  ringgo5,
  afterhours,
  rainbowsprings,
  innisfree,
  meratus,
  thislovewillneverend,
  forever,
  whiskeybottle,
  waitingforyou,
  kanda,
  bubasoul,
  lavishbrow,
  vicari1,
  vicari3,
  buccheri,
  fatigon,
  remington,
  ganangmamikat,
  vidixindomie,
  shot,
  stayawhile,
  fairytale,
  seconddate,
  ifw,
  jbp,
  runlv,
  human,
  amateur,
  kopichuseyo,
  beatthesun,
  darlie,
  azarine,
  premierebeaute,
  instapeach,
  lafresco,
  larasatie,
  mondial,
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
      whiskeybottle,
      waitingforyou,
      forever,
      thislovewillneverend,
      takkankemana,
      wadoow,
      home,
      readyforlove,
      theheartyouhurt,
      bertahanlewatisenja,
      caliente,
      kanda,
      ringgo5,
      midground,
      mrSun,
    ],
  },
  {
    group: 'Digital Commercial',
    projects: [
      npure,
      bubasoul,
      bmhs,
      innisfree,
      instapeach,
      somethinc,
      pedro,
      rainbowsprings,
      iomi1,
      iomi2,
      remington,
      fatigon,
      accbid,
      glowgene,
      wowacc,
      ganangmamikat,
      vicari1,
      vicari3,
      buccheri,
      kopichuseyo,
      lavishbrow,
      beatthesun,
      azarine,
      premierebeaute,
      mondial,
    ],
  },
  {
    group: 'Branding',
    projects: [lafresco, larasatie],
  },
  {
    group: 'Corporate Videos',
    projects: [orori, eastventure, meratus, afterhours, apple],
  },
  {
    group: 'Motion Graphics & Animation',
    projects: [sig, shot, stayawhile, fairytale, human, runlv, amateur, darlie],
  },
  {
    group: 'Events',
    projects: [ifw, seconddate, jbp],
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
