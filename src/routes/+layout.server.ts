import type { TypeNavigationSkeleton } from '$lib/clients/content_types'
import { contentful } from '$lib/clients/contentful'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async () => {
  const [navigation] = (await contentful.getEntries<TypeNavigationSkeleton>({
    content_type: "navigation",
    "fields.id": "Principal"
  })).items

  console.log(navigation)
	return {
		navigation
	}
}