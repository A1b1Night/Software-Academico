import './App.css';
import Login from './Pages/Login';
import Menu from './Pages/Menu';
import Matematica from './Pages/Matematicas';
import Comprension from './Pages/ComprensionLectora';
import Registro from './Pages/Registro';
import Juego1 from './Pages/Juego1';

import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';

export default function App() {
  return (
    <StyledEngineProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/Matematica' element={<Matematica />} />
        <Route path='/Comprension' element={<Comprension />} />
        <Route path='/Registro' element={<Registro />} />
        <Route path='/Juego1' element={<Juego1 />} />
      </Routes>
    </BrowserRouter>
    </StyledEngineProvider>
  );
}

