import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import {Routes, Route} from "react-router-dom"
import Navbar from "./Components/Navbar"
import {MovieProvider} from "./contexts/MovieContext"

function App() {
  return (
    <MovieProvider>
    <div>
      <Navbar />
    <main className="mainContent">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favorites" element={<Favorites />}/>
      </Routes>
    </main>
    </div>
    </MovieProvider>
  )
}

export default App
