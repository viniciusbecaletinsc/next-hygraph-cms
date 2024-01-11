import { GraphQLClient, gql } from "graphql-request";

export const client = new GraphQLClient('https://sa-east-1.cdn.hygraph.com/content/clr83cjhf04ik01wdouskpltd/master')

export const GET_SITES_SLUG = gql`
  query GetSitesSlug {
    sites {
      slug
    }
  }
`

export const GET_SITE_BY_SLUG_QUERY = gql`
  query GetSiteBySlug ($slug: String!) {
    site(where: { slug: $slug }) {
      id
      name
      slug
      theme {
        primary {
          hex
        }
      }
    }
  }
`

export const GET_SITES_QUERY = gql`
  query GetSites {
    sites {
      id
      name
      slug
      theme {
        primary {
          hex
        }
      }
    }
  }
`