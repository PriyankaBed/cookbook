import { NavLink } from "react-router-dom";
import logo from "./Images/logo.png";
import "./App.css";

function Navbar() {
    return (
        <div className='header'>
            <div className='logo'>
                <img src={logo} alt='logo' key='logo' />
                <h2>Cookbook</h2>
            </div>
            <nav className='nav'>
                <NavLink
                    to='/'
                    style={({ isActive }) => ({
                        color: isActive ? "blue" : "black",
                    })}
                >
                    Home
                </NavLink>

                <NavLink
                    to='/about'
                    style={({ isActive }) => ({
                        color: isActive ? "blue" : "black",
                    })}
                >
                    {" "}
                    About{" "}
                </NavLink>
            </nav>
        </div>
    );
}

export default Navbar;