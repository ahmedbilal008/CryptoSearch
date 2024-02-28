import { BrowserRouter,Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import CryptoDetails from "./components/CryptoDetails"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/coin/:id" element={<CryptoDetails/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
