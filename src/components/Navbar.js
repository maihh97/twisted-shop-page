import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import logo from "./logo1.png"
import "./Navbar.css"

function Navbar() {
    return (
        <header>
            <nav className="nav">
                <Link to="/" className="main-site"><img src={logo} className="logo-img" ></img></Link>
                <ul className="nav-items">
                    <CustomLink to="/about">OUR MISSION</CustomLink>
                    <CustomLink to="/howitworks">HOW IT WORKS</CustomLink>
                    <CustomLink to="/signup">JOIN US</CustomLink>
                </ul>

                <ul>
                    <CustomLink to="/shop">SHOP ONLINE</CustomLink>
                    <CustomLink to="/wholesale">WHOLE SALE</CustomLink>
                </ul>

            </nav>
        </header>
    )
}

function CustomLink( {to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )

}
export default Navbar;