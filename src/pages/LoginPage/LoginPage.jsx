import React, { useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnchangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleOnchangePass = (e) => {
    setPassword(e.target.value);
  };
  const onClickLogin = () => {
    let localData = JSON.parse(localStorage.getItem("data"));
    if (!email || !password) {
      alert("Hãy nhập email và password");
    } else {
      let userEmailExist = localData.filter(
        (e) => e.email === email && e.pass === password
      );
      console.log(userEmailExist);
      if (userEmailExist.length) {
        alert("Đăng nhập thành công");
      } else {
        alert("Sai email hoặc Mật khẩu");
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login">
        <div className="login-img">
          <img src="http://flixgo.volkovdesign.com/main/img/logo.svg" alt="" />
        </div>
        <div className="login-email-pass">
          <input
            type="text"
            placeholder="Email"
            onChange={handleOnchangeEmail}
            value={email}
          />
        </div>
        <div className="login-email-pass">
          <input
            type="text"
            placeholder="Password"
            onChange={handleOnchangePass}
            value={password}
          />
        </div>
        <div className="login-check">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Remember</label>
          <button onClick={onClickLogin}>SIGN IN</button>
        </div>
        <div>
          <span>
            Don't have an account?  <a href=""><Link to="/register">Sign up!</Link> </a>
          </span>
        </div>
        <div>
          <span className="login-check-span">
            <a href="">Forgot Password?</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
