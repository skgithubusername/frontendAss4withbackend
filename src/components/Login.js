import React, { useState } from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import myImage from './images/demo-logo.png';

function Login() {
  // handle sumbition of login form
  const [form , setForm] = useState ({});

  const handleForm = (e)=>{
    // console.log(e.target.value,e.target.name);

    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const handleSumbit = async (e)=>{
    e.preventDefault();
    const response = await fetch('http://localhost:8080/demo',{
      method:'POST',
      body:JSON.stringify(form),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const data = await response.json();
    console.log(data);
  }

  return (
    <div>
     {/* navbar */}
<nav className="navbar">
      <div className="navbar-left">
        <img src={myImage} alt="" className="logo" />
      </div>
      <ul className="nav-list">
        <li className="nav-item"><a href="/">Home</a></li>
        <li className="nav-item"><a href="#about">About</a></li>
        <li className="nav-item"><a href="#features">Features</a></li>
        <li className="nav-item"><a href="/login">Login</a></li>
        <li className="nav-item"><a href="/Pricing">Pricing</a></li>
      </ul>
    </nav>



    {/* login form */}
      <form className="login-form" onSubmit={handleSumbit}>
        <h3>Login Here</h3>
        <label htmlFor="username">Username:</label>
        <input type="text" placeholder="Email or Phone" id="username" name="username" onChange={handleForm} />
        <label htmlFor="password"> Password:</label>
        <input type="password" placeholder="Password" id="password" name="password" onChange={handleForm} />
        <button >Log In</button>
      </form>


      </div>
    
  );
}

export default Login;
