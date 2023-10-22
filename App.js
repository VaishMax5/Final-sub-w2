import React  from 'react';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { BrowserRouter,Routes,Route} from "react-router-dom";
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
<Route element={<Home />} path="/" />
<Route element={<About />} path="/about"/>
<Route element={<Contact />} path="/contact"/>
<Route element={<Login />} path="/Login"/>
<Route element={<Signup />} path="/Signup"/>

    </Routes>
    </BrowserRouter>
    </>
  );
};
export default App;