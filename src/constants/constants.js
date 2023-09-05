export const API_URL = process.env.NODE_ENV === 'development'
  ? process.env.REACT_APP_LOCAL_API_URL
  : process.env.REACT_APP_SERVER_API_URL;