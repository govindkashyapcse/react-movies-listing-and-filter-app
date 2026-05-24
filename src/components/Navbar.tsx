import { Link } from "react-router-dom"
const Navbar = () => {
    const navstyle = {
        display: "flex",
        justifyContent: "space-evenly",
        background: "black",
        color: "white",
        padding: "10px"
    }
    const astyle = {
        color: "white",
        fontSize: "20px"
    } 
  return ( 
    <header>
        <nav style={navstyle}>
            <Link to="/" style={astyle}>Home</Link>
            <Link to="/favorites" style={astyle}>Favorites</Link>
        </nav>
    </header>
  )
}

export default Navbar
