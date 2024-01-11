export interface ITheme {
  primary: {
    hex: string
  }
}

export interface IHero {
  title: string
  description: string
  image: {
    url: string
  }
}

export interface ISite {
  id: string
  name: string
  slug: string
  theme: ITheme
  hero: IHero
}

export interface ISiteResponse {
  site: ISite;
  currentTime: string
}

export interface ISitesResponse {
  sites: ISite[];
}