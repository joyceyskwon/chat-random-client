const API_ROOT = "http://localhost:3000"

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

const fetchUsers = () => {
  return fetch(`${API_ROOT}/users`).then(res => res.json())
}

export default { createUser, fetchUsers }