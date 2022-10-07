import './App.css';
import Login from './Pages/Login/Login';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>

    </BrowserRouter>
  );
}

