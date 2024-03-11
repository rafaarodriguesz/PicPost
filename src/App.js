//css
import './App.css';

//extentions
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

//pages
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';

//components
import Navbar from './components/NavBar/Navbar';


function App() {
  return (
    <div>


      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
