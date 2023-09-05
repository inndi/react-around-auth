import { API_URL } from "../constants/constants";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.statusText}`);
}

export const register = (email, password) => {
  return fetch(`${API_URL}/signup`, {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  })
    .then((res) => {
      return checkResponse(res);
    })
}

export const authorize = (email, password) => {
  return fetch(`${API_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then((res) => {
      return checkResponse(res);
    })
    .then((data) => {
      if (data) {
        localStorage.setItem('jwt', data.token);
        return data;
      }
    })
}

export const getContent = (token) => {
  return fetch(`${API_URL}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })
    .then(res => checkResponse(res))
    .then(data => data);
}

export const getCards = (token) => {
  return fetch(`${API_URL}/cards`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })
    .then(res => checkResponse(res))
    .then(data => data);
}