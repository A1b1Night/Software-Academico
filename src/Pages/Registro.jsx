import '../Css/Registro.css';
import {ReactComponent as Perro} from '../Assets/Img/Perro.svg';
import {Button}  from "@mui/material";


function Registro() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "#4AE0A7",
      }}
    >
      <div className="register-box">
        <Perro className="avatar" />
        <div className="Formulario">
          <h1>Registro de Usuario</h1>
          <form>
            <div className="apellidos">

              {/* Apellido Paterno */}
              <input type="text" placeholder="Apellido Paterno" />

              {/* Apellido Materno */}
              <input type="text" placeholder="Apellido Materno" />

            </div>

            {/* Nombre */}
            <input type="text" placeholder="Nombre" />

            {/* Email */}
            <input type="email" placeholder="Ingresa Correo Electronico" />

            {/* Password */}
            <input type="password" placeholder="Ingresa Contraseña" />

            <Button
              variant="contained"
              size="large"
              href="/"
              fullWidth
              sx={{
                borderRadius: "10px",
                backgroundColor: "#9E8EFA",
                "&:hover": { backgroundColor: "#ED6F42" },
              }}
            >
              Registrarse
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registro