import '../Css/Interfaz.css'

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
      </div>
    </div>
  );
}

export default Interfaz