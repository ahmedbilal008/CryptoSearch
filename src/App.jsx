import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import CryptoDetails from "./views/CryptoDetails";
import ExchangeDetails from "./views/ExchangeDetails";
import AllCoins from "./views/AllCoins";
import AllExchanges from "./views/AllExchanges";
import News from "./views/News";
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
        <Route path="/coins" element={<AllCoins darkMode={darkMode} />} />
        <Route path="/exchanges" element={<AllExchanges darkMode={darkMode} />} />
        <Route path="/news" element={<News darkMode={darkMode} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
