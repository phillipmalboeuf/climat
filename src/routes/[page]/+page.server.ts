import type { TypePageSkeleton } from '$lib/clients/content_types'
import { contentful } from '$lib/clients/contentful'
import type { Entry } from 'contentful'
import type { PageServerLoad, Actions } from './$types'
import { doc } from '$lib/clients/sheets'

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

export const actions: Actions = {
	register: async ({ request }) => {
		const data = await request.formData()

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0]

    // await sheet.setHeaderRow([...data.keys()])

    // @ts-ignore
    const row = await sheet.addRow({ ...Object.fromEntries<string>(data) })

    return { success: true }
	}
}