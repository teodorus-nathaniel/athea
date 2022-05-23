import urlJoin from 'url-join'

export function getCurrentWebsiteUrl() {
  if (typeof window === 'object') {
    return window.location.origin
  }
  return ''
}

export function generateWebsiteUrl(pathname: string) {
  return urlJoin(getCurrentWebsiteUrl(), pathname)
}
