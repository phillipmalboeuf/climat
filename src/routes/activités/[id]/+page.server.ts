import type { TypeEventSkeleton, TypePageSkeleton } from '$lib/clients/content_types'
import { contentful } from '$lib/clients/contentful'
import type { Entry } from 'contentful'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = (async ({ locals, url, params }) => {
  const [[event]] = await Promise.all([
    (await contentful.getEntries<TypeEventSkeleton>({ 
      content_type: "event",
      "fields.id": params.id,
      include: 2,
      locale: 'fr-CA'
    })).items,
  ])

  return {
    event
  }
})