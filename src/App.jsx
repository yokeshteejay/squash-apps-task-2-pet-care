
import Home from "../pages/Home"
import Home2 from "../pages/Home2"
import Home3 from "../pages/Home3"

import { BrowserRouter , Route , Routes } from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home2" element={<Home2 />} />
      <Route path="/home3" element={<Home3 />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
