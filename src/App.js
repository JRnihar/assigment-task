
import './App.css';
import Login from './Components/Login/Login';
import Header from './Components/Login/Header';
import { Route, Routes } from 'react-router-dom';
import Trial from './Components/Login/Trial';
import Register from './Components/Login/Register';


function App() {
  return (
    <div>
      <Header></Header>
   
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/trial' element={<Trial></Trial>}></Route>
      </Routes>

    </div>
  );
}

export default App;
