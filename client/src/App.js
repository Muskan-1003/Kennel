import logo from './logo.svg';
import './App.css';
import Home from "./component/pages/Home"
import { Route, Routes } from 'react-router-dom';
import About from './component/pages/About';
import Work from './component/pages/Work';
import NotFound from './component/pages/NotFound';
import Navbar from './component/Navbar';
import Login from './component/login/Login';
import Signup from './component/login/Signup';
import { useState } from 'react';
import SignupForm1 from './component/login/SignupForm';

function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  return (
    <div className="bg-[#FEFAE0]  h-screen">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      {/* <SignupForm1/> */}
      <Routes>
        <Route path="/" element={<div>{<Home />}</div>} />
        <Route path="/About" element={<div>{<About />}</div>} />
        <Route path="/Work" element={<div>{<Work />}</div>} />
        <Route path="/Login" element={<div>{<Login />}</div>} />
        <Route path="/Signup" element={<div>{<Signup />}</div>} />
        <Route path="/Signup" element={<div>{<Signup />}</div>} />
        <Route path="/*" element={<div>{<NotFound />}</div>} />
      </Routes>
    </div>
  );
}

export default App;
