import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from "./Components/Login"
import { Home } from './Components/Home';
import { ToastContainer } from 'react-toastify';
// this is app.j
function App() {
  return (
    <div>
      <ToastContainer/>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </Router>
        
    </div>
  );
}

export default App;
