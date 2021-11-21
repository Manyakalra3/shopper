import React, { Component } from 'react'
import {Link} from 'react-router-dom';
//import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../logo.svg'
import styled from 'styled-components';
//import {NavWrapper} from '../components/navwrapper';
import {ButtomContainer} from '../components/button';
export default class Navbar extends Component {
   

    render() {
        return (
            <>
              <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
              <Link to='/'></Link>
              <img src={logo} alt="store" className="navbar-brand"/>
             <ul className="navbar-nav align-items-center">
                 <li className="nav-item ml-5"></li>
                 <Link to="/" className= "nav-link">products</Link>
             </ul>
             <Link to="/cart" className='ml-auto'>
                 <ButtomContainer>
                     <span className="mr-2">
                     <i className="fas fa-cart-plus">My Cart</i>
                     </span>
                 </ButtomContainer>
             </Link>
             </NavWrapper>
            </>
        )
    }
}

const NavWrapper= styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite) !important;
    text-transform:capitalize;
}
`;