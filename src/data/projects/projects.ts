import { ProjectData } from '../types'
import { accbid } from './accbid/detail'
import { afterhours } from './afterhours/detail'
import { alsa } from './alsa/detail'
import { amateur } from './amateur/detail'
import { apple } from './apple/detail'
import { astra } from './astra/detail'
import { azarine } from './azarine/detail'
import { beatthesun } from './beatthesun/detail'
import { bertahanlewatisenja } from './bertahanlewatisenja/detail'
import { bmhs } from './bmhs/detail'
import { bubasoul } from './bubasoul/detail'
import { buccheri } from './buccheri/detail'
import { caliente } from './caliente/detail'
import { charlesnkeith } from './charlesnkeith/detail'
import { darlie } from './darlie/detail'
import { eastventure } from './eastventure/detail'
import { fairytale } from './fairytale/detail'
import { fatigon } from './fatigon/detail'
import { ganangmamikat } from './ganangmamikat/detail'
import { gangga1 } from './gangga1/detail'
import { gangga2 } from './gangga2/detail'
import { gangga3 } from './gangga3/detail'
import { gangga4 } from './gangga4/detail'
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
import { jaz } from './jaz/detail'
import { jbp } from './jbp/detail'
import { kanda } from './kanda/detail'
import { kks } from './kks/detail'
import { kopichuseyo } from './kopichuseyo/detail'
import { lavishbrow } from './lavishbrow/detail'
import { lebakers } from './lebakers/detail'
import { masih } from './masih/detail'
import { meratus } from './meratus/detail'
import { middlegroundlv } from './middlegroundlv/detail'
import { midground } from './midground/detail'
import { mrSun } from './mr-sun/detail'
import { ninetofive } from './ninetofive/detail'
import { npure } from './npure/detail'
import { omo } from './omo/detail'
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
import { takbisa } from './takbisa/detail'
import { takkankemana } from './takkankemana/detail'
import { theovertunes } from './the-overtunes/detail'
import { thedancecompany } from './thedancecompany/detail'
import { theheartyouhurt } from './theheartyouhurt/detail'
import { tooandmore } from './tooandmore/detail'
import { tooandmorelv } from './tooandmorelv/detail'
import { trashtalkin } from './trashtalkin/detail'
import { vicari1 } from './vicari1/detail'
import { vicari2 } from './vicari2/detail'
import { vicari3 } from './vicari3/detail'
import { vidixindomie } from './vidixindomie/detail'
import { wadoow } from './wadoow/detail'
import { wanita } from './wanita/detail'
import { wanitamv } from './wanitamv/detail'
import { wowacc } from './wowacc/detail'

export const projects: ProjectData[] = [
  npure,
  sig,
  astra,
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
  masih,
  theheartyouhurt,
  takkankemana,
  home,
  bertahanlewatisenja,
  caliente,
  eastventure,
  jaz,
  pedro,
  omo,
  orori,
  accbid,
  iomi1,
  iomi2,
  alsa,
  ringgo5,
  afterhours,
  kks,
  rainbowsprings,
  innisfree,
  meratus,
  gangga1,
  gangga2,
  gangga3,
  gangga4,
  kanda,
  bubasoul,
  lebakers,
  lavishbrow,
  vicari1,
  vicari2,
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
  tooandmorelv,
  middlegroundlv,
  runlv,
  human,
  amateur,
  wanita,
  kopichuseyo,
  beatthesun,
  takbisa,
  charlesnkeith,
  darlie,
  azarine,
  premierebeaute,
  wanitamv
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
      gangga1,
      gangga2,
      gangga3,
      gangga4,
      takkankemana,
      wadoow,
      masih,
      home,
      readyforlove,
      theheartyouhurt,
      bertahanlewatisenja,
      caliente,
      jaz,
      kks,
      alsa,
      kanda,
      ringgo5,
      midground,
      takbisa,
      wanitamv,
      mrSun
    ]
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
      lebakers,
      fatigon,
      accbid,
      glowgene,
      wowacc,
      ganangmamikat,
      vicari1,
      vicari2,
      vicari3,
      buccheri,
      kopichuseyo,
      lavishbrow,
      beatthesun,
      omo,
      charlesnkeith,
      azarine,
      premierebeaute
    ]
  },
  {
    group: 'Branding',
    projects: []
  },
  {
    group: 'Corporate Videos',
    projects: [orori, eastventure, meratus, afterhours, apple, astra]
  },
  {
    group: 'Motion Graphics & Animation',
    projects: [
      sig,
      shot,
      stayawhile,
      fairytale,
      human,
      tooandmorelv,
      runlv,
      amateur,
      middlegroundlv,
      wanita,
      darlie
    ]
  },
  {
    group: 'Events',
    projects: [ifw, seconddate, jbp]
  }
]
