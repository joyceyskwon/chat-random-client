const API_ROOT = "https://chat-random-server.herokuapp.com/"

const headers = {
  'Content-Type': 'application/json',
  'Accepts': 'application/json'
}

const createUser = user => {
  return fetch(`${API_ROOT}/users`, {
    method: 'POST',
    headers,
    body: JSON.stringify(user)
  }).then(res => res.json())
}

export default { createUser }