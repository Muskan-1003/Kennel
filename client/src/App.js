import logo from "./logo.svg";
import "./App.css";
import Home from "./component/pages/home/Home";
import { Route, Routes } from "react-router-dom";

// import Work from "./component/pages/Work";
import NotFound from "./component/pages/NotFound";
// import Navbar from "./component/pages/home/Navbar";
import Login from "./component/login/Login";
import Signup from "./component/login/Signup";
import Footer from "./component/Footer";
import Feeds from "./component/pages/feeds/Main";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const isFeedsPage = location.pathname === "/feeds";



  return (
    <div className="bg-[#FEFAE0] h-full ">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path="/" element={<div>{<Home />}</div>} />
       
        {/* <Route path="/Work" element={<div>{<Work />}</div>} /> */}
        <Route path="/Login" element={<div>{<Login />}</div>} />
        <Route path="/Signup" element={<div>{<Signup />}</div>} />
        <Route path="/*" element={<div>{<NotFound />}</div>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
