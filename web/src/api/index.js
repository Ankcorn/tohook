import axios from 'axios';

export async function login({ email, password }) {
  const result = await axios.post('/auth/login', { email, password })
  window.localStorage.setItem('jwt', result.data.token)
}

export async function check() {
  try {
    const jwt = window.localStorage.getItem('jwt');
    await axios.get('/check', {
      headers: {
        Authorization: `bearer ${jwt}`
      }
    })
    console.log('checked')
    console.log(true)
    return true
  } catch (e) {
    return false
  }
}

export async function getTodo() {
  const jwt = window.localStorage.getItem('jwt');
  const result = await axios.get('todo', {
    headers: {
      Authorization: `bearer ${jwt}`
    }
  })
  return result.data;
}

export async function addTodo(description) {
  const jwt = window.localStorage.getItem('jwt');
  await axios.post('/todo', { description },{
    headers: {
      Authorization: `bearer ${jwt}`
    }
  })
}

export async function updateTodo(id, object) {
  const jwt = window.localStorage.getItem('jwt');
  await axios.put(`/todo/${id}`, object,{
    headers: {
      Authorization: `bearer ${jwt}`
    }
  })
}

export default {
  login,
  check,
  getTodo,
  addTodo,
  updateTodo
};