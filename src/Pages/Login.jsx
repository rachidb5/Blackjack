import React from 'react';
import LoginForm from '../Components/LoginForm';
import './Bg.css'
import Logo from '../Components/Logo';

function Login() {
    return (
      <div className="bg-dark bg">
        <Logo />
        <LoginForm />
      </div>
    )
}

export default Login;