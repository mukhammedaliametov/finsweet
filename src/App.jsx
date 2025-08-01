import React, {useEffect} from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";
import Footer from './components/Footer';
import Newsletter from "./components/Newsletter";
import Career from "./pages/Career";
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Hero />} />
          <Route path="/career" element={<Career />}></Route>
        </Route>
      </Routes>
      <Newsletter />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
