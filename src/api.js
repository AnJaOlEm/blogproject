const url = 'http://localhost:8000/';

export async function apiGetUsers() {
  let res = await fetch(url + "users")
  return res.json();
}

export async function apiCreateDb() {
  let res = await fetch(url)
  return res.json()
}