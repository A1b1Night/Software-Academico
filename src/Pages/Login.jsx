import '../Css/Login.css';
import {ReactComponent as Perro} from '../Img/Perro.svg';
import {Button}  from "@mui/material";
import { Link} from 'react-router-dom';


export default function Login() {
  return (
    <div style={{
      width:'100%',
      height:'100vh',
      background: '#4AE0A7',
    }}>

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

      <Button variant='contained' size="large" href="Menu" fullWidth>Iniciar Sesion"</Button>
      <Link to="#">¿Has perdido tu contraseña?</Link>
      <br/>
      <Link to="#">¿No tienes una cuenta?</Link>
    </form>
    </div>
  </div>
</div>
  )
}

  




