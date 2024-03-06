import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import CryptoDetails from "./views/CryptoDetails";
import ExchangeDetails from "./views/ExchangeDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <BrowserRouter>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/coin/:id" element={<CryptoDetails darkMode={darkMode} />} />
        <Route path="/exchange/:id" element={<ExchangeDetails darkMode={darkMode} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
