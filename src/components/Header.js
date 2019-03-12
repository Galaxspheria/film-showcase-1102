import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Header.scss';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="Container-fluid top-block">

                </div>
                <div className="Header fade-down">
                    <Link to="/"><img src={this.props.data.home.elements[0]["Header Image"]} alt='' className="header-img"/></Link>
                    <div style={{textAlign: 'right', flexGrow: 1}}>
                        <NavLink className="header-button" activeClassName="hb-active" exact to="/">Home</NavLink>
                        <NavLink className="header-button" activeClassName="hb-active" to="/authors">Authors</NavLink>
                        <NavLink className="header-button" activeClassName="hb-active" to="/about">About</NavLink>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Header;
