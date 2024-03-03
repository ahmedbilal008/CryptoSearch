import { BrowserRouter,Route, Routes } from "react-router-dom"
import Home from "./views/Home"
import CryptoDetails from "./views/CryptoDetails"
import Navbar from "./components/Navbar"

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/coin/:id" element={<CryptoDetails/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
