import './App.css';
import {Route, Routes} from 'react-router-dom'
import Cennik from './Pages/Cennik';
import Admin from './Pages/Admin';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Cennik />} />
      <Route path='/rejestracja' element={<Admin/>} />
    </Routes>
  );
}

export default App;
