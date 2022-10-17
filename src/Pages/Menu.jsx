import '../Css/Menu.css';
import {ReactComponent as Libro} from '../Img/Libro.svg';
import {ReactComponent as Grafico} from '../Img/Grafico.svg';
import {ReactComponent as User } from '../Img/User.svg';
import {ReactComponent as FlechaIzquierda } from '../Img/Flecha-Izquierda.svg';
import {Button}  from "@mui/material";


function Menu() {
  return (
    <div id="back-menu">
      <div className="contenedor">
        <Button href="Matematica">
          <div className="contenedores">
            <h1>Matematicas</h1>
            <Grafico className="avatar" />
          </div>
        </Button>

        <Button href="Comprension">
          <div className="contenedores">
            <h1>Comprension Lectora</h1>
            <Libro className="avatar" />
          </div>
        </Button>

        <div className="Opciones">
          <div>
            <Button href="/"><FlechaIzquierda /></Button>
          </div>
          <div>
            <Button><User /></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu