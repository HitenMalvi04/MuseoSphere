

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login({ setAuthToken }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errmsg, setErrmsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log(":::handle submit clld");
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5050/api/users/login', { email, password });
      console.log("res:::",res);
      setAuthToken(res.data.token);
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      err.status == 400 ? setErrmsg("wrong id password") : setErrmsg("Something is wrong");
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <h3>{errmsg}</h3>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
