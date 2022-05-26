import './App.css';
import {Route, Routes} from 'react-router-dom'
import Cennik from './Pages/Cennik';
import Login from './Pages/Login';
import Admin from './Pages/AdminPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Cennik />} />
      <Route path='/loginpage' element={<Login />} />
      <Route path='/admin' element={<Admin/>} />
    </Routes>
  );
}

export default App;
