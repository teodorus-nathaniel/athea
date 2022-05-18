type NextImageType = string | StaticImageData

export interface ProjectOverviewData {
  key: string
  thumbnail: NextImageType
  title: string
  titleDesc: string
  subtitle: string
}

export interface ServiceData {
  image?: NextImageType
  title: string
  subtitle: string
}

export interface ClientData {
  image: any
  alt?: string
}

export interface TeamMemberData {
  image?: NextImageType
  name: string
  position: string
}

export interface ProjectData extends ProjectOverviewData {
  images: StaticImageData[]
  meta: { label: string; value: string }[]

  overview: string
  credits: string

  relatedWorks: ProjectOverviewData[]
}
