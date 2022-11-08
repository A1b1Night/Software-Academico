import '../Css/Interfaz.css'
import {Button}  from "@mui/material";
import FlechaRegreso from '../Components/FlechaRegreso';
import Memorama from '../Assets/Img/Memorama.jpg'

function Interfaz() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100vh",
          background: "#EDFAA7",
        }}
      >
        <div className="pizarra">
          <div className="contenido">
            <Button href="Juego1">
              <div>
                <img src={Memorama} alt="" />
              </div>
            </Button>

            <div></div>
            <div></div>
          </div>
        </div>
        <FlechaRegreso />
      </div>
    </div>
  );
}

export default Interfaz