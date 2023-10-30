import type { TypeListSkeleton, TypeNavigationSkeleton } from '$lib/clients/content_types'
import { contentful } from '$lib/clients/contentful'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async () => {
  const [[primary], [secondary], [footer]] = await Promise.all([
    (await contentful.getEntries<TypeNavigationSkeleton>({
      content_type: "navigation",
      "fields.id": "Principal"
    })).items,
    (await contentful.getEntries<TypeNavigationSkeleton>({
      content_type: "navigation",
      "fields.id": "Secondaire"
    })).items,
    (await contentful.getEntries<TypeListSkeleton>({
      content_type: "list",
      "fields.id": "footer"
    })).items
  ])

	return {
		primary,
    secondary,
    footer
	}
}