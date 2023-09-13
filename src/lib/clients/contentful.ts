import { createClient } from 'contentful'

const preview = true
export const contentful = createClient({
  space: '4s9lnrj1ysbl',
  host: preview ? 'preview.contentful.com' : 'cdn.contentful.com',
  accessToken: preview ? 'K5NF5MV61aX0rWS7vQjmHVgsUu9jD03Kz8Bd_lUA39M' : 'tAqLDlA5tE8Y2bUSgosnlicau32GXIMHQpRY9mCovmM',
}).withoutUnresolvableLinks