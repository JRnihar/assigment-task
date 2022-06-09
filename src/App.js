
import './App.css';
import Login from './Components/Login/Login';
import Header from './Components/Login/Header';
import { Route, Routes } from 'react-router-dom';
import Trial from './Components/Login/Trial';
import Register from './Components/Login/Register';
import RequireAuth from './Components/Login/RequireAuth'


function App() {
  return (
    <div>
      <Header></Header>
   
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/trial' element={
          <RequireAuth>
            <Trial></Trial>
          </RequireAuth>
        }></Route>
      </Routes>

    </div>
  );
}

export default App;
