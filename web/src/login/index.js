import React, { useState } from 'react';
import { navigate } from '@reach/router'
import { login } from '../api';

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' })
  return (
    <div>
      <h1>Login</h1>
      <input type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
      <input type="password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
      <button onClick={async () => { await login(user); navigate('/'); }}>
        Login
      </button>
    </div>
  )
}

export default Login