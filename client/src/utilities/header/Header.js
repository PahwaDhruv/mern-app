import React from 'react';
import {NavLink} from 'react-router-dom';
const Header = () => {
    const links = [
        {
            text : 'Home',
            value : '/'
        },
        {
            text : 'About US',
            value : '/about'
        },
        {
            text : 'Contact US',
            value : '/contact'
        }
    ]
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <NavLink to="/" className="navbar-brand">MERN APP</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    {
                        links.map((link,index) => (
                            <li key={index} className="nav-item">
                                <NavLink to={link.value} className="nav-link">{link.text}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>    
    )
}

export default Header;