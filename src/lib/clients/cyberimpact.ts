import { CYBERIMPACT_KEY } from '$env/static/private'

export const addMember = (email: string, firstname: string, lastname: string, company: string, groups: string[]) => {
  return fetch('https://api.cyberimpact.com/members', {
    method: 'POST',
    headers: {
      "Authorization": "Bearer "+CYBERIMPACT_KEY,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      firstname,
      lastname,
      company,
      groups: groups.join(',')
    })
  })
}