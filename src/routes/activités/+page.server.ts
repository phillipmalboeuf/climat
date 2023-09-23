import type { TypeEventSkeleton, TypePageSkeleton } from '$lib/clients/content_types'
import { contentful } from '$lib/clients/contentful'
import type { Entry } from 'contentful'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = (async ({ locals, url, params }) => {
  const [[page], upcoming, passed] = await Promise.all([
    (await contentful.getEntries<TypePageSkeleton>({ 
      content_type: "page",
      "fields.id": 'activités',
      include: 2,
      locale: 'fr-CA'
    })).items,
    (await contentful.getEntries<TypeEventSkeleton>({ 
      content_type: "event",
      "fields.archive[nin]": [true],
      include: 2,
      locale: 'fr-CA',
      order: ["fields.date"]
    })).items,
    (await contentful.getEntries<TypeEventSkeleton>({ 
      content_type: "event",
      "fields.archive": true,
      include: 2,
      locale: 'fr-CA',
      order: ["-fields.date"]
    })).items,
  ])
  

  return {
    page,
    upcoming,
    passed
  }
})