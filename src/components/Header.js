import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Header.scss';

class Header extends Component {
    render() {
        return (
            <div className="Header fade-down">
                <Link to="/"><img src="https://via.placeholder.com/50"/></Link>
                <div style={{textAlign: 'right', flexGrow: 1}}>
                    <NavLink className="header-button" activeClassName="hb-active" exact to="/">Home</NavLink>
                    <NavLink className="header-button" activeClassName="hb-active" to="/authors">Authors</NavLink>
                    <NavLink className="header-button" activeClassName="hb-active" to="/about">About</NavLink>
                </div>
            </div>
        );
    }
}

export default Header;
