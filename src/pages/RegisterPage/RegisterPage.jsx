import React, { useState } from "react";
import "./RegisterPage.scss";
import { Link } from "react-router-dom";



const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnchangeName = (e) => {
    setName(e.target.value);
  };
  const handleOnchangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleOnchangePass = (e) => {
    setPassword(e.target.value);
  };
  const handleSignUp = () => {
    let localData = JSON.parse(localStorage.getItem("data"));
    console.log(localData);
    let userData = {
      name: name,
      email: email,
      pass: password,
    };
    if (!name || !email || !password) {
      alert("Hãy nhập đủ vào");
    } else if (localData == null) {
      let localData = [];
      localData.push(userData);
      localStorage.setItem("data", JSON.stringify(localData));
      alert("ok rồi đấy");
    } else {
      let ckeck = localData.filter((e) => e.email === email);
      if (ckeck.length > 0) {
        alert("Tài khoản đã có rồi");
      } else {
        localData.push(userData);
        localStorage.setItem("data", JSON.stringify(localData));
        alert("Đăng kí ok");
      }
    }
  };

  return (
    <div className="register-page">
      <div className="register">
        <div className="register-1">
          <img src="http://flixgo.volkovdesign.com/main/img/logo.svg" alt="" />
        </div>
        <div className="register-2">
          <input
            type="text"
            placeholder="Name"
            onChange={handleOnchangeName}
            value={name}
          />
          <input
            type="text"
            placeholder="Email"
            onChange={handleOnchangeEmail}
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={handleOnchangePass}
            value={password}
          />
        </div>
        <div className="register-3">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">
            I agree to the <a href="">Privacy Polyci</a>
          </label>
        </div>
        <div className="register-4">
          <button onClick={handleSignUp}>SIGN UP</button>
        </div>
        <div className="register-5">
          Already have an account? <a href=""> <Link to="/login">Sign In!</Link> </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
