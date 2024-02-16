import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(()=>{
    const auth=localStorage.getItem("jwt");
    if(auth) navigate("/")
  })
  const loginUser = async (e) => {
    e.preventDefault();
    let user = await fetch("http://localhost:3000/login", {
      method: "post",
      body: JSON.stringify({ Email: email, Password: password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    user = await user.json();
    const {currUser,token}=user;
    console.log(currUser);
    localStorage.setItem('jwt',token);
    localStorage.setItem('user',JSON.stringify(currUser));
    setEmail("");
    setPassword("");
    navigate("/");
  };
  return (
    <div className="login-register-div">
      <form>
        <h2>Login</h2>
        <label className="user-label"  htmlFor="email">Email</label>
        <input
        className="user-input"
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {/* <div class="email error"></div> */}
        <label className="user-label"  htmlFor="password">Password</label>
        <input
        className="user-input"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {/* <div class="password error"></div> */}
        <button onClick={loginUser}>Login</button>
      </form>
    </div>
  );
};

export default Login;
