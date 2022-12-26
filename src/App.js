
import './App.css';
import { useContext } from 'react';
import { AuthProvider, AuthContext } from "./AuthContext";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './component/Home';
import Posts from './component/Posts';
import { Login } from './component/Login';

function App() {
  const authContext = useContext(AuthContext);
  return (
    <div className="App">

      <Router>
        <Navbar />
        
        {authContext.auth.email ?
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Posts' element={<Posts />} />
          
          </Routes>

          : <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Login' element={<Login />} />
          </Routes>}

      </Router>

    </div>
  );
}


function AppStore() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>);
}

export default AppStore;
