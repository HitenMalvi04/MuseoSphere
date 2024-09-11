import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // if using FontAwesome
import './Login.css'; // Optional: for additional custom styling if needed
import { useNavigate } from 'react-router-dom';



const Login = ({ setAuthToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State for error message
  const navigate = useNavigate(); // Hook for navigation


  const handleSubmit = async (e) => {
    console.log(":::handle submit clld");
    e.preventDefault();
    try {
      const res = await axios.post('https://museosphere-backend.onrender.com/api/users/login', { email, password });
      console.log("res:::1111");
      setAuthToken(res.data.token);
      console.log("res:::",res);
      sessionStorage.setItem('token', JSON.stringify(res.data.user));
      setError(''); // Clear any previous error message on successful login
      navigate('/'); // Redirect to the login page

      
    } catch (err) {
      console.error("ERR::",err);
      setError('Invalid email or password, error :'+err.message); // Set an error message if login fails
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
                  <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Log in</h3>

                  {error && (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                  )}

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

                  <div className="pt-1 mb-4">
                    <button className="btn btn-info btn-lg btn-block" type="submit">Login</button>
                  </div>

                  <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Forgot password?</a></p>
                  <p>Don't have an account? <a href="/sign-up" className="link-info">Register here</a></p>
                </form>
              </div>
            </div>

            <div className="col-sm-6 px-0 d-none d-sm-block">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
                alt="Login"
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

export default Login;
