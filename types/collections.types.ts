export interface MuseumApiResponse {
  elapsedMilliseconds: number
  count: number
  countFacets: {
    hasimage: number
    ondisplay: number
  }
  artObjects: ArtObject[]
  facets: Facet[]
}

export interface ArtObject {
  links: {
    self: string
    web: string
  }
  id: string
  objectNumber: string
  title: string
  hasImage: boolean
  principalOrFirstMaker: string
  longTitle: string
  showImage: boolean
  permitDownload: boolean
  webImage: ImageInfo | null
  headerImage: ImageInfo | null
  productionPlaces: string[]
}

export interface ImageInfo {
  guid: string | null
  offsetPercentageX: number
  offsetPercentageY: number
  width: number
  height: number
  url: string | null
}

export interface Facet {
  facets: {
    key: string
    value: number
  }[]
  name: string
  otherTerms: number
  prettyName: number
}
