import './App.css';
import Login from './Pages/Login';
import Menu from './Pages/Menu';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='Menu' element={<Menu />} />
      </Routes>

    </BrowserRouter>
  );
}

