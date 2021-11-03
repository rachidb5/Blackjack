import React, { useContext } from 'react';
import LoginForm from '../Components/LoginForm';
import Context from '../Context/Context';
import './Bg.css'
import Logo from '../Components/Logo';

function Login() {
    const { player } = useContext(Context);
    return (
      <div className="bg-dark bg">
        <Logo />
        <LoginForm playerNumber={ player } />
      </div>
    )
}

export default Login;