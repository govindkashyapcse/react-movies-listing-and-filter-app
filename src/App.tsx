import { Route, Routes } from "react-router-dom"
import { MovieProvider } from "./contexts/MovieContext"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"

function App() {
    // 43ae53f7 - api key omdb

    return (
        <MovieProvider>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favorites" element={<Favorites />} />
            </Routes>
        </MovieProvider>
    )
}
export default App
