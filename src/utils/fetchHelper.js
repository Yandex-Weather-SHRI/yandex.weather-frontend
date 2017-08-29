import { API_URL } from 'constants/api'


function getHeaders() {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
}

function createRequest(url, options) {
  const endpoint = API_URL + url
  const headers = getHeaders()

  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(endpoint, { ...options, headers })
      const jsonResponse = await response.json()

      if (response.ok) {
        resolve(jsonResponse)
      }
      else {
        reject(jsonResponse)
      }
    }
    catch (error) {
      reject(error)
    }
  })
}

export const request = {
  get(url) {
    return createRequest(url)
  },

  post(url, data) {
    return createRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
    })
  },

  put(url, data) {
    return createRequest(url, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  },

  delete(url) {
    return createRequest(url, {
      method: 'DELETE',
    })
  },
}
