export const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://weather-forecast-api.herokuapp.com'
  : 'http://localhost:3100'
