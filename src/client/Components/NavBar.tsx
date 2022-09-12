import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const linkMaker = (endPoint: string, display: string) => {
        return <Link to={endPoint} className='nav-link'>{display}</Link>
    }
    return(
        <nav className='nav-bar'>
            {linkMaker('/', 'Home')}
            {linkMaker('/client_data', 'Client Data')}
            {linkMaker('/reporting', 'Reporting')}
            {linkMaker('/settings', 'Settings')}
        </nav>
    )
}

export default NavBar;