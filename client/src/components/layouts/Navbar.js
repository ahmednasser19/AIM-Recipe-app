import React from 'react'
import Logo from '../logo2.png';
import styled from 'styled-components';
import {Link} from "react-router-dom";
export const Navbar = () => {
    return (
    <NavbarContainer>
        <nav className="navbar navbar-expand-lg navbar-light px-5 py-0 ">
            <Link className="navbar-brand" to="#">
                <img   style={{width: '50px'}}src={Logo} alt="logo" />
                </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/add-recipe">Add Recipe </Link>
                </li>
                
                </ul>
                
            </div>
        </nav>
      
    </NavbarContainer>
    )
}

export default Navbar ;

// Main navbar container 

const NavbarContainer = styled.div`
    background : var(--dark-green);
    .nav-link { 
        color :#fff !important; 
        &:hover {
            background:  var(--light-green);
        }
    } 
    

`;