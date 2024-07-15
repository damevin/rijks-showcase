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

export interface FormatedCollection {
  title: string
  objectNumber: string
  description?: string
  webImage: string
}

export interface ArtObject {
  id: string
  objectNumber: string
  title: string
  hasImage?: boolean
  description: string
  webImage: ImageInfo | null
}

export interface ImageInfo {
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
