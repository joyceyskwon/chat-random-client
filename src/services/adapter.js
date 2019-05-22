// Please use these URLs when running backend on the local machine:
// const API_ROOT = "http://localhost:3000"
// const API_WS_ROOT = "ws://localhost:3000/cable"

// Heroku URLs
const API_ROOT = "https://chat-random-server.herokuapp.com"

const API_WS_ROOT = "wss://chat-random-server.herokuapp.com/cable"

const headers = {
  'Content-Type': 'application/json',
  'Accepts': 'application/json'
}

const createUser = userData => {
  return fetch(`${API_ROOT}/users`, {
    method: 'POST',
    headers,
    body: JSON.stringify(userData)
  }).then(res => res.json())
}

// const logOutUser = userId => {
//   return fetch(`${API_ROOT}/users/${userId}`, {
//     method: 'PATCH',
//     headers,
//     body: JSON.stringify({
//       is_online: false
//     })
//   }).then(res => res.json())
// }

const fetchUsers = () => {
  return fetch(`${API_ROOT}/users`).then(res => res.json())
}

const addMessage = msg => {
  return fetch(`${API_ROOT}/messages`, {
    method: 'POST',
    headers,
    body: JSON.stringify(msg)
  }).then(res => res.json())
}

const createChatroom = data => {
  return fetch(`${API_ROOT}/chatrooms`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json())
}

const fetchChatrooms = () => {
  return fetch(`${API_ROOT}/chatrooms`).then(res => res.json())
}

export default { createUser, fetchUsers, addMessage, createChatroom, fetchChatrooms, API_WS_ROOT }