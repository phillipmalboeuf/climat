import type { TypePageSkeleton } from '$lib/clients/content_types'
import { contentful } from '$lib/clients/contentful'
import type { Entry } from 'contentful'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = (async ({ locals, url, params }) => {
  const [page] = await Promise.all([
    contentful.getEntry<TypePageSkeleton>('52FW7sse1jMECdlIu9wzuf', { include: 2, locale: 'fr-CA' }),
  ])

  return {
    page
  }
})