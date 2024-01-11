interface ITheme {
  primary: {
    hex: string
  }
}

interface ISite {
  id: string
  name: string
  slug: string
  theme: ITheme
}

export interface ISiteResponse {
  site: ISite;
  currentTime: string
}

export interface ISitesResponse {
  sites: ISite[];
}