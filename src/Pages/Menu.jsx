import React from 'react'
import '../Css/Menu.css';
import {ReactComponent as Libro} from '../Img/Libro.svg';
import {ReactComponent as Grafico} from '../Img/Grafico.svg';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

function Menu() {
  return (
    <div id='back-menu'>
      <div className='contenedor'>
          <div className='contenedores'>
          <h1>Matematicas</h1>
          <Grafico className="avatar" />
      </div>

      <div className='contenedores'>
          <h1>Comprension Lectora</h1>
          <Libro className="avatar" />
      </div>

      <div className='Opciones'>
        <div>
          <IconButton><KeyboardBackspaceIcon fontSize='large' sx={{color:"black"}} /></IconButton>
        </div>
        <div>
          <IconButton><PersonIcon fontSize='large' sx={{color:"black"}} /></IconButton>
        </div>
      </div>

      </div>
    </div>
  )
}

export default Menu