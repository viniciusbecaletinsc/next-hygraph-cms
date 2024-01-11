import { GetStaticPaths, GetStaticProps } from 'next'
import { client, GET_SITES_SLUG, GET_SITE_BY_SLUG_QUERY } from '@/lib/hygraph'
import { ISiteResponse, ISitesResponse } from '@/_types/models'

export const getStaticPaths: GetStaticPaths = async () => {
  const data: ISitesResponse = await client.request(GET_SITES_SLUG)

  return {
    paths: data.sites.map((site) => ({ params: { site: site.slug } })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const site = params?.site as string;
  const currentTime = new Date().toLocaleTimeString()

  const data: ISiteResponse = await client.request(GET_SITE_BY_SLUG_QUERY, { slug: site })

  if (!data.site) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      site: data.site,
      currentTime
    },
    revalidate: 30
  }
}

export default function Home({ site, currentTime }: ISiteResponse) {
  return (
    <div>
      <h1>{site.name}</h1>
      <p>slug: {site.slug}</p>
      <button
        style={{
          backgroundColor: site.theme.primary.hex
        }}
      >Botão estilizado</button>
      <span>{currentTime}</span>
    </div>
  )
}
