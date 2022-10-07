import React from 'react'
import './Login.css';
import {ReactComponent as Perro} from './Img/Perro.svg';
import { NavLink } from 'react-router-dom';

export default function Login() {
  return (
    <div className='login-box'>
    <Perro className="avatar" />
    <div className='Formulario'>

  
    <h1>Login</h1>
    <form>
      {/* Username */}
      <label htmlFor="username">Nombre de Usuario</label>
      <input type="text" placeholder='Ingresa Nombre de Usuario' />

      {/* Password */}
      <label htmlFor="password">Contraseña</label>
      <input type="password" placeholder='Ingresa Contraseña' />

      <input type="submit" value="Iniciar Sesion" />

      <NavLink to="#">¿Has perdido tu contraseña?</NavLink>
      <br/>
      <NavLink to="#">¿No tienes una cuenta?</NavLink>
    </form>
    </div>
  </div>
  )
}


