import './nav.scss'
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="topnav">
            <NavLink activeclassname="selected" to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/covid">Covid</NavLink>
            <NavLink to="/countdown">CountDown</NavLink>
        </div>
    )
}

export default Nav;