import React from 'react';
import styled from 'styled-components'
import '../styles/Welcome.css';
import Logo from './Logo';


const Navbar = () => {


    return (
        <div>
            <NavbarStyle>  
                <Logo />
            </NavbarStyle>
        </div>
    )
}

export default Navbar;

const NavbarStyle = styled.nav({
    width:'100%',
    backgroundColor:'#FFF',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 1px 2px 0px'

})
