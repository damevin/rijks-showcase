export interface CollectionDetailled {
  links: {
    search: string
  }
  id: string
  priref: string
  objectNumber: string
  language: string
  title: string
  copyrightHolder: string | null
  webImage: {
    guid: string
    offsetPercentageX: number
    offsetPercentageY: number
    width: number
    height: number
    url: string
  }
  colors: Array<{
    percentage: number
    hex: string
  }>
  colorsWithNormalization: Array<{
    originalHex: string
    normalizedHex: string
  }>
  normalizedColors: Array<{
    percentage: number
    hex: string
  }>
  normalized32Colors: Array<any> // This array was empty in the example
  materialsThesaurus: Array<any> // This array was empty in the example
  techniquesThesaurus: Array<any> // This array was empty in the example
  productionPlacesThesaurus: Array<any> // This array was empty in the example
  titles: Array<any> // This array was empty in the example
  description: string
  labelText: string | null
  objectTypes: string[]
  objectCollection: Array<any> // This array was empty in the example
  makers: Array<{
    name: string
    unFixedName: string
    placeOfBirth: string | null
    dateOfBirth: string | null
    dateOfBirthPrecision: string | null
    dateOfDeath: string | null
    dateOfDeathPrecision: string | null
    placeOfDeath: string | null
    occupation: string[]
    roles: string[]
    nationality: string | null
    biography: string | null
    productionPlaces: string[]
    qualification: string | null
    labelDesc: string
  }>
  principalMakers: Array<{
    name: string
    unFixedName: string
    placeOfBirth: string | null
    dateOfBirth: string | null
    dateOfBirthPrecision: string | null
    dateOfDeath: string | null
    dateOfDeathPrecision: string | null
    placeOfDeath: string | null
    occupation: string[]
    roles: string[]
    nationality: string | null
    biography: string | null
    productionPlaces: string[]
    qualification: string | null
    labelDesc: string
  }>
  plaqueDescriptionDutch: string
  plaqueDescriptionEnglish: string
  principalMaker: string
  artistRole: string | null
  associations: Array<any> // This array was empty in the example
  acquisition: {
    method: string
    date: string
    creditLine: string | null
  }
  exhibitions: Array<any> // This array was empty in the example
  materials: string[]
  techniques: string[]
  productionPlaces: string[]
  dating: {
    presentingDate: string
    sortingDate: number
    period: number
    yearEarly: number
    yearLate: number
  }
  classification: {
    iconClassIdentifier: Array<any> // This array was empty in the example
    iconClassDescription: Array<any> // This array was empty in the example
    motifs: Array<any> // This array was empty in the example
    events: string[]
    periods: string[]
    places: string[]
    people: string[]
    objectNumbers: string[]
  }
  hasImage: boolean
  historicalPersons: string[]
  inscriptions: Array<any> // This array was empty in the example
  documentation: Array<any> // This array was empty in the example
  catRefRPK: Array<any> // This array was empty in the example
  principalOrFirstMaker: string
  dimensions: Array<{
    unit: string
    type: string
    precision: string | null
    part: string | null
    value: string
  }>
  physicalProperties: Array<any> // This array was empty in the example
  physicalMedium: string
  longTitle: string
  subTitle: string
  scLabelLine: string
  label: {
    title: string
    makerLine: string | null
    description: string
    notes: string
    date: string
  }
  showImage: boolean
  location: string
};
