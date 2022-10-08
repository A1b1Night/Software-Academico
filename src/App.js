import './App.css';
import Login from './Pages/Login';
import Menu from './Pages/Menu';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';


export default function App() {
  return (
    <StyledEngineProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Menu' element={<Menu />} />
      </Routes>
    </BrowserRouter>
    </StyledEngineProvider>
  );
}

