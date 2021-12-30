import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../Context/Context';
import './LoginForm.css'

function LoginForm(props) {
  const { setPlayerOne } = useContext(Context);
  const [name, setName] = useState('')
  const onClick = () => {
    if (name === '') {
      global.alert('Digite um nome ou apelido!');
      return null;
    }
      setPlayerOne(name);
      setName('');
  }
  return (
    <div className="d-flex justify-content-center">
    <div className="form-container bg-light col-4 mr-5">
      <form>
        <div className="mb-3">
          <label className="form-label ">Player </label>
          <input
            type="name"
            name="nick"
            className="form-control"
            placeholder="Digite Seu Nome"
            value={ name }
            onChange= { ({ target: { value } }) => setName(value) }
          />
        </div>
        <Link to="/jogo">
          <button
            className="btn btn-danger mt-2 col-12"
            type="button"
            onClick={ onClick }
          >
            Jogar
          </button>
        </Link>
      </form>
    </div>
    </div>
    )
}

export default LoginForm;