import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== password2) {
      setError('Passwords do not match');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5050/api/users/register', {
        name,
        email,
        password,
      });
      console.log(res);
      setSuccess(true); // Set success to true
      localStorage.setItem('token', res.data.token); // Save JWT token in localStorage
      setError('');
      navigate('/login'); // Redirect to dashboard or desired route after successful registration
    } catch (err) {
      setError(err.response.data.message || 'Registration failed');
      console.log("came to catch");
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>Registration successful!</p>}
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Enter Name"
            onChange={onChange}
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter Email"
            onChange={onChange}
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter Password"
            onChange={onChange}
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password2"
            value={password2}
            placeholder="Confirm Password"
            onChange={onChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
