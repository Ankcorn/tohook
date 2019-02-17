import { useState, useEffect } from 'react';
import { navigate } from '@reach/router'
import { check } from '../api';

function RequiresAuth({ children }) {
  const [isAuthed, setAuth] = useState(false)
  
  const checkAuth = async () => {
    if(!await check()) {
      return navigate('/login')
    }
    return setAuth(true)
  }

  useEffect( () => {
    checkAuth()
  }, [])

  return isAuthed && children
}

export default RequiresAuth;