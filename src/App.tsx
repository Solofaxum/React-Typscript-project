// import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import {About} from "./main-pages/About"
import {Store} from "./main-pages/Store"
import {Home} from "./main-pages/Home"
import {Navbar} from './components/Navebar'
import { ShoppingCartProvider } from "./context/shoppingCartContext"
function App() {
  // const [count, setCount] = useState(0)

  return (
    <ShoppingCartProvider>
    <Navbar />
    <div className="mb-4">
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
    </ShoppingCartProvider>
  )
}

export default App
