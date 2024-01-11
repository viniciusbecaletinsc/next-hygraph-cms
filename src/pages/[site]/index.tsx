import { GetStaticPaths, GetStaticProps } from 'next'
import { client, GET_SITES_SLUG, GET_SITE_BY_SLUG_QUERY } from '@/lib/hygraph'
import { ISiteResponse, ISitesResponse } from '@/_types/models'
import { HeroSection } from '@/components/Hero'
import Link from 'next/link'
import { Box } from '@chakra-ui/react'

export default function Home({ site }: ISiteResponse) {
  return (
    <div>
      <Box
        display={['flex']}
        gap={[4]}
      >
        <Link href="/grupo-polgo">Grupo Polgo</Link>
        <Link href="/promo">Polgo Promo</Link>
        <Link href="/segmentacao">Polgo Segmentação</Link>
        <Link href="/qualquercoisa">404</Link>
      </Box>

      <HeroSection data={site.hero} />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data: ISitesResponse = await client.request(GET_SITES_SLUG)

  return {
    paths: data.sites.map((site) => ({ params: { site: site.slug } })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const site = params?.site as string;

  const data: ISiteResponse = await client.request(GET_SITE_BY_SLUG_QUERY, { slug: site })  

  if (!data.site) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      site: data.site,
    },
    revalidate: 30
  }
}
