import type { TypePageSkeleton } from '$lib/clients/content_types'
import { contentful } from '$lib/clients/contentful'
import type { Entry } from 'contentful'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = (async ({ locals, url, params }) => {
  const [[page]] = await Promise.all([
    (await contentful.getEntries<TypePageSkeleton>({ 
      content_type: "page",
      "fields.id": params.page,
      include: 2,
      locale: 'fr-CA'
    })).items,
  ])
  

  return {
    page
  }
})