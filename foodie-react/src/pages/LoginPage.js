import React from "react";
import "../styles/loginPageStyles.css";
import logo from "../resources/images/logo.png";

export default class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: ""
    };
  }

  render() {
    return (
      <div className="main-container login-page">
        <div className="login-background"></div>
        <div className="login-form">
          <div className="app-logo">
            <img src={logo} />
          </div>
          <form className="login-form" action="">
            <h1>Sign In</h1>
            <div className="form-field">
              
            </div>
            <div className="form-field">
              
            </div>
            <div className="form-field">
              
            </div>
            <span className="forgot-password">Forgot Password?</span>
            <a className="link" href="">
              Click Here
            </a>
          </form>
        </div>
      </div>
    );
  }
}
