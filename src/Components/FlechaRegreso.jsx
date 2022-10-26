import React from 'react'
import {Button}  from "@mui/material";
import {ReactComponent as FlechaIzquierda } from '../Assets/Img/Flecha-Izquierda.svg';

function FlechaRegreso() {
  return (
      <div className="Flecha-regreso">
        <Button href="Menu">
          <FlechaIzquierda />
        </Button>
      </div>
  );
}

export default FlechaRegreso