import React from "react";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
import MovieDetail from "./pages/MovieDetail";
//Router
import { Routes ,Route, useLocation } from 'react-router-dom';
//Animation
import { AnimatePresence } from "framer-motion";


function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence >
      <Routes location={location} key={location.pathname}>
        <Route path="/about" element={<AboutUs />} exact></Route>
        <Route path="/work" element={<OurWork />} exact></Route>
        <Route path="/work/:id" element={<MovieDetail />}></Route>
        <Route path="/contact" element={<ContactUs />} ></Route>
      </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
