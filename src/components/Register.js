import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // if using FontAwesome
import './Login.css'; // Optional: for additional custom styling if needed
import { useNavigate } from 'react-router-dom';


const Register = ({ setAuthToken }) => {
  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(''); // State for error message
  const navigate = useNavigate(); // Hook for navigation

  const handleLoginClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    navigate('/login'); // Navigate to the login page
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const res = await axios.post('https://museosphere-backend.onrender.com/api/users/register', { name, email, password });
      console.log("res:::",res);
      setAuthToken(res.data.token); 
      localStorage.setItem('token', res.data.token);
      setError(''); // Clear any previous error message on successful registration
      navigate('/login'); // Redirect to the login page

    } catch (err) {
      setError('Registration failed, error: ' + err.message); // Set an error message if registration fails
      console.error(err);
    }
  };

  return (
    <div className="container mt-5">
      <section className="vh-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 text-black">
              <div className="px-5 ms-xl-4">
                <i className="fas fa-hand-o-right fa-2x me-3 pt-5 mt-xl-4" style={{ color: '#709085' }}></i>
                <span className="h1 fw-bold mb-0">MuseoSphere</span>
              </div>

              <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                <form style={{ width: '23rem' }} onSubmit={handleSubmit}>
                  <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Register</h3>

                  {error && (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                  )}

                  <div className="form-outline mb-4">
                    <input 
                      type="text" 
                      id="form2Example17" 
                      className="form-control form-control-lg" 
                      value={name}
                      onChange={(e) => setname(e.target.value)} 
                    />
                    <label className="form-label" htmlFor="form2Example17">name</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input 
                      type="email" 
                      id="form2Example18" 
                      className="form-control form-control-lg" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} 
                    />
                    <label className="form-label" htmlFor="form2Example18">Email address</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input 
                      type="password" 
                      id="form2Example28" 
                      className="form-control form-control-lg" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)} 
                    />
                    <label className="form-label" htmlFor="form2Example28">Password</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input 
                      type="password" 
                      id="form2Example29" 
                      className="form-control form-control-lg" 
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)} 
                    />
                    <label className="form-label" htmlFor="form2Example29">Confirm Password</label>
                  </div>

                  <div className="pt-1 mb-4">
                    <button className="btn btn-info btn-lg btn-block" type="submit">Register</button>
                  </div>

                  <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Forgot password?</a></p>
                  <p>Already have an account? 
                    <a href="#!" className="link-info" onClick={handleLoginClick}>Login here</a></p>
                </form>
              </div>
            </div>

            <div className="col-sm-6 px-0 d-none d-sm-block">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
                alt="Register"
                className="w-100 vh-100"
                style={{ objectFit: 'cover', objectPosition: 'left' }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
