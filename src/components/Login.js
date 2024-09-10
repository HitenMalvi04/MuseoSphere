// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function Login({ setAuthToken }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errmsg, setErrmsg] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     console.log(":::handle submit clld");
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5050/api/users/login', { email, password });
//       console.log("res:::",res);
//       setAuthToken(res.data.token);
//       localStorage.setItem('token', res.data.token);
//       navigate('/dashboard');
//     } catch (err) {
//       err.status == 400 ? setErrmsg("wrong id password") : setErrmsg("Something is wrong");
//       console.error(err);
//     }
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <h3>{errmsg}</h3>
//       <form onSubmit={handleSubmit}>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;

import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  // Define styles as objects
  const containerStyle = {
    textAlign: "center",
    padding: "200px",
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const headerStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const inputWrapperStyle = {
    marginBottom: "20px",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
    fontSize: "14px",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  };

  const forgotPasswordStyle = {
    color: "#007bff",
    textDecoration: "none",
  };

  const buttonStyle = {
    display: "inline-block",
    padding: "10px 20px",
    borderRadius: "4px",
    backgroundColor: "#007bff",
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    textAlign: "center",
    cursor: "pointer",
  };

  const socialButtonStyle = {
    ...buttonStyle,
    margin: "5px",
    padding: "10px",
    fontSize: "13px",
  };

  const socialButtonTwitterStyle = {
    ...socialButtonStyle,
    backgroundColor: "#1DA1F2",
  };

  const socialButtonFacebookStyle = {
    ...socialButtonStyle,
    backgroundColor: "#4267B2",
  };

  // Transition and hover styles
  const loginWrapperStyle = {
    display: "inline-block",
    width: "auto",
    verticalAlign: "middle",
    fontSize: "13px",
    margin: "0 50px 0 5px",
    visibility: "hidden",
    opacity: 0,
    transition: "all 150ms ease-out",
    transform: "translateX(30px)",
  };

  const loginButtonStyle = {
    position: "relative",
    height: "30px",
    cursor: "pointer",
    display: "inline-block",
    width: "auto",
    padding: "0 20px",
  };

  const loginButtonBeforeStyle = {
    position: "absolute",
    width: "100%",
    height: "0",
    background: "#222",
    content: '""',
    left: 0,
    bottom: 0,
    transition: "all 150ms ease-out",
  };

  const loginButtonSpanStyle = {
    position: "relative",
    zIndex: 1,
    color: "#222",
    transition: "all 150ms ease-out",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Log in</h2>

      <div style={{ marginBottom: "20px" }} />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "48%" }}>
          <form>
            <div style={inputWrapperStyle}>
              <label htmlFor="inputEmail" style={labelStyle}>
                E-mail
              </label>
              <input
                id="inputEmail"
                name="email"
                type="text"
                style={inputStyle}
                required
              />
            </div>
            <div style={inputWrapperStyle}>
              <label htmlFor="inputPassword" style={labelStyle}>
                Password
              </label>
              <input
                id="inputPassword"
                name="psw"
                type="password"
                style={inputStyle}
                required
              />
            </div>
            <p>
              <a href="#" style={forgotPasswordStyle}>
                Forgot your password?
              </a>
            </p>
            <div style={{ margin: "20px 0" }} />
            <a href="#" style={buttonStyle}>
              Submit
            </a>
          </form>
        </div>

        <div style={{ width: "48%" }}>
          <h4>LOG IN VIA SOCIAL NETWORKS</h4>
          <p>
            Ut enim ad minim veniam, quis nostrud laboris nisi ut aliquip
            commodo quat duis aute irure dolor
          </p>
          <div style={{ margin: "30px 0" }} />
          <a href="#" style={socialButtonTwitterStyle}>
            Twitter
          </a>
          <a href="#" style={socialButtonFacebookStyle}>
            Facebook
          </a>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <div style={{ marginTop: "10%" }}>
              <a href="#" className="btn btn-warning">
                Continue With Guest
              </a>
            </div>
            <div style={{ marginTop: "10%" }}>
              <Link to="/" className="btn btn-primary">
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "30px" }}>
        <Link to="/sign-up" style={buttonStyle}>
          Sign up now
        </Link>
      </div>
    </div>
  );
};

export default Login;
