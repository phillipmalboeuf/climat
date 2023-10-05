import { GoogleSpreadsheet } from 'google-spreadsheet'
import { JWT } from 'google-auth-library'
import { SHEETS_EMAIL, SHEETS_KEY, SHEETS_ID } from '$env/static/private'

const SCOPES = [
  'https://www.googleapis.com/auth/spreadsheets',
  'https://www.googleapis.com/auth/drive.file',
];

const jwt = new JWT({
  email: SHEETS_EMAIL,
  key: SHEETS_KEY,
  scopes: SCOPES,
});
export const doc = new GoogleSpreadsheet(SHEETS_ID, jwt);