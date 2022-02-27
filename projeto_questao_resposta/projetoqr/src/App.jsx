import './App.css';

import { Route, Routes } from 'react-router-dom'

import Home from './Home';
import Jogo from './Jogo';

function App() {
  return (
    <div>
      <div>
        <b>Nosso projeto com rotas</b>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Jogo' element={<Jogo />} />
       
      </Routes>
      <div>

      </div>
    </div>
  );
}

export default App;
