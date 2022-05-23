type NextImageType = string | StaticImageData

export interface ProjectOverviewData {
  key: string
  thumbnail: NextImageType
  title: string
  titleDesc: string
  subtitle: string
}

export interface ServiceData {
  video: string
  title: string
  subtitle: string
}

export interface ClientData {
  image: any
  alt?: string
}

export interface TeamMemberData {
  image: string
  name: string
  position: string
}

export interface ProjectData extends ProjectOverviewData {
  images: string[]
  meta: { label: string; value: string }[]

  overview: string
  credits: string

  relatedWorks: ProjectOverviewData[]
}
