import type { TypeNavigationSkeleton } from '$lib/clients/content_types'
import { contentful } from '$lib/clients/contentful'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async () => {
  const [primary] = (await contentful.getEntries<TypeNavigationSkeleton>({
    content_type: "navigation",
    "fields.id": "Principal"
  })).items

  const [secondary] = (await contentful.getEntries<TypeNavigationSkeleton>({
    content_type: "navigation",
    "fields.id": "Secondaire"
  })).items

	return {
		primary,
    secondary
	}
}