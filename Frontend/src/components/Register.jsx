import React, { useState ,useEffect} from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(()=>{
    const auth=localStorage.getItem("jwt");
    if(auth) navigate("/")
  })
  const registerUser = async (e) => {
    e.preventDefault();
    let curUser = await fetch("http://localhost:3000/register", {
      method: "post",
      body: JSON.stringify({ Name:name, Email:email, Password:password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    curUser=await curUser.json();
    const {user,token}=curUser;
    localStorage.setItem('jwt',token);
    console.log(user)
    localStorage.setItem('user',JSON.stringify(user));
    setEmail("");
    setPassword("");
    setName("");
    console.log(user);
    navigate("/");
  };
  return (
    <div className="login-register-div">
      <form>
        <h2>Register</h2>
        <label className="user-label" htmlFor="name">Name</label>
        <input
        className="user-input"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        {/* <div class="name error"></div> */}
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
        <label className="user-label" htmlFor="password">Password</label>
        <input
        className="user-input"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {/* <div class="password error"></div> */}
        <button onClick={registerUser}>Register</button>
      </form>
    </div>
  );
};

export default Register;
