type NextImageType = string | StaticImageData

export interface ProjectOverviewData {
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
