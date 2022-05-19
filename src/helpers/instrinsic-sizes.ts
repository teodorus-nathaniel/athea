export function calculateObjectFitElement(
  element: HTMLImageElement | HTMLVideoElement
) {
  const imageComputedStyle = window.getComputedStyle(element)
  const imageObjectFit = imageComputedStyle.getPropertyValue('object-fit')
  const coordinates: {
    sourceWidth?: number
    sourceHeight?: number
    sourceX?: number
    sourceY?: number
    width?: number
    height?: number
    destinationWidthPercentage?: number
    destinationHeightPercentage?: number
    destinationXPercentage?: number
    destinationYPercentage?: number
  } = {}
  const imagePositions = imageComputedStyle
    .getPropertyValue('object-position')
    .split(' ')

  let naturalWidth
  let naturalHeight
  if (element.tagName === 'VIDEO') {
    naturalWidth = (element as HTMLVideoElement).videoWidth
    naturalHeight = (element as HTMLVideoElement).videoHeight
  } else {
    naturalWidth = (element as HTMLImageElement).naturalWidth
    naturalHeight = (element as HTMLImageElement).naturalHeight
  }

  const horizontalPercentage = parseInt(imagePositions[0]) / 100
  const verticalPercentage = parseInt(imagePositions[1]) / 100
  const naturalRatio = naturalWidth / naturalHeight
  const visibleRatio = element.clientWidth / element.clientHeight
  if (imageObjectFit === 'none') {
    coordinates.sourceWidth = element.clientWidth
    coordinates.sourceHeight = element.clientHeight
    coordinates.sourceX =
      (naturalWidth - element.clientWidth) * horizontalPercentage
    coordinates.sourceY =
      (naturalHeight - element.clientHeight) * verticalPercentage
    coordinates.destinationWidthPercentage = 1
    coordinates.destinationHeightPercentage = 1
    coordinates.destinationXPercentage = 0
    coordinates.destinationYPercentage = 0
  } else if (imageObjectFit === 'contain' || imageObjectFit === 'scale-down') {
    coordinates.sourceWidth = naturalWidth
    coordinates.sourceHeight = naturalHeight
    coordinates.sourceX = 0
    coordinates.sourceY = 0
    if (naturalRatio > visibleRatio) {
      coordinates.destinationWidthPercentage = 1
      coordinates.destinationHeightPercentage =
        naturalHeight /
        element.clientHeight /
        (naturalWidth / element.clientWidth)
      coordinates.destinationXPercentage = 0
      coordinates.destinationYPercentage =
        (1 - coordinates.destinationHeightPercentage) * verticalPercentage
    } else {
      coordinates.destinationWidthPercentage =
        naturalWidth /
        element.clientWidth /
        (naturalHeight / element.clientHeight)
      coordinates.destinationHeightPercentage = 1
      coordinates.destinationXPercentage =
        (1 - coordinates.destinationWidthPercentage) * horizontalPercentage
      coordinates.destinationYPercentage = 0
    }
  } else if (imageObjectFit === 'cover') {
    if (naturalRatio > visibleRatio) {
      coordinates.sourceWidth = naturalHeight * visibleRatio
      coordinates.sourceHeight = naturalHeight
      coordinates.sourceX =
        (naturalWidth - coordinates.sourceWidth) * horizontalPercentage
      coordinates.sourceY = 0
    } else {
      coordinates.sourceWidth = naturalWidth
      coordinates.sourceHeight = naturalWidth / visibleRatio
      coordinates.sourceX = 0
      coordinates.sourceY =
        (naturalHeight - coordinates.sourceHeight) * verticalPercentage
    }
    coordinates.destinationWidthPercentage = 1
    coordinates.destinationHeightPercentage = 1
    coordinates.destinationXPercentage = 0
    coordinates.destinationYPercentage = 0
  } else {
    if (imageObjectFit !== 'fill') {
      console.error(
        "unexpected 'object-fit' attribute with value '" +
          imageObjectFit +
          "' relative to"
      )
    }
    coordinates.sourceWidth = naturalWidth
    coordinates.sourceHeight = naturalHeight
    coordinates.sourceX = 0
    coordinates.sourceY = 0
    coordinates.destinationWidthPercentage = 1
    coordinates.destinationHeightPercentage = 1
    coordinates.destinationXPercentage = 0
    coordinates.destinationYPercentage = 0
  }

  coordinates.width =
    coordinates.destinationWidthPercentage * coordinates.sourceWidth
  coordinates.height =
    coordinates.destinationHeightPercentage * coordinates.sourceHeight

  return coordinates
}
