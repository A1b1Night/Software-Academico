import '../Css/Login.css';
import {ReactComponent as Perro} from '../Assets/Img/Perro.svg';
import {Button}  from "@mui/material";
import { Link} from 'react-router-dom';


export default function Login() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "#4AE0A7",
      }}
    >
      <div className="login-box">
        <Perro className="avatar" />
        <div className="Formulario">
          <h1>Inicie Sesion</h1>
          <form>
            {/* Username */}
            <label>Correo Electronico</label>
            <input type="email" placeholder="Ingresa Correo Electronico" />

            {/* Password */}
            <label>Contraseña</label>
            <input type="password" placeholder="Ingresa Contraseña" />

            <Button
              variant="contained"
              size="large"
              href="Menu"
              fullWidth
              sx={{
                borderRadius: "10px",
                backgroundColor: "#9E8EFA",
                "&:hover": { backgroundColor: "#ED6F42" },
              }}
            >
              Iniciar Sesion
            </Button>
            <Link to="Registro">¿No tienes una cuenta?</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

  




