export function importAll<T>(r: __WebpackModuleApi.RequireContext) {
  const images: { [key: string]: T } = {}
  r.keys().forEach((filename: string) => {
    images[filename.replace('./', '')] = r(filename).default
  })
  return images
}
