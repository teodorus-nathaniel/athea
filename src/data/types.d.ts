type ImageType = string | undefined

export interface ProjectOverviewData {
  key: string
  thumbnail: ImageType
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
  video: string

  overview: string
  credits: string

  relatedWorks: ProjectOverviewData[]
}
