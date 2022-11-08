import '../Css/Interfaz.css'
import FlechaRegreso from '../Components/FlechaRegreso';

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
            <div></div>
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