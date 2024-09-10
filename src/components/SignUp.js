import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  // Define styles as objects
  const containerStyle = {
    textAlign: "center",
    padding: "150px",
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

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Sign up</h2>

      <div style={{ marginBottom: "20px" }} />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "48%" }}>
          <form>
            <div style={inputWrapperStyle}>
              <label htmlFor="inputName" style={labelStyle}>
                Name
              </label>
              <input
                id="inputName"
                name="name"
                type="text"
                style={inputStyle}
                required
              />
            </div>
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
            <div style={inputWrapperStyle}>
              <label htmlFor="inputRePassword" style={labelStyle}>
                Repeat password
              </label>
              <input
                id="inputRePassword"
                name="psw"
                type="password"
                style={inputStyle}
                required
              />
            </div>
            <div style={{ margin: "20px 0" }} />
            <a href="#" style={buttonStyle}>
              Submit
            </a>
          </form>
        </div>

        <div style={{ width: "48%" }}>
          <h4>REGISTER VIA SOCIAL NETWORKS</h4>
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
    </div>
  );
};

export default SignUp;
