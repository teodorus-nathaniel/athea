import urlJoin from 'url-join'

export function getCurrentWebsiteUrl() {
  return window.location.origin
}

export function generateWebsiteUrl(pathname: string) {
  return urlJoin(getCurrentWebsiteUrl(), pathname)
}
