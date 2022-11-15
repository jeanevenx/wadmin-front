import React from 'react';
import styled from 'styled-components'
import '../styles/Welcome.css';
import Logo from './Logo';


const WelcomeNavbar = () => {


    return (
        <div>
            <NavbarStyle>  
                <Logo UrlLogo="/"/>
                <MenuWelcome>
                    <a href="/register" className="welcome-menu"
                    ><li>Cadastre-se</li></a>
                    <a href="/login" className="welcome-menu"><li>Entrar</li></a>
                </MenuWelcome> 
            </NavbarStyle>
        </div>
    )
}

export default WelcomeNavbar;

const NavbarStyle = styled.nav({
    width:'100%',
    backgroundColor:'#FFF',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 1px 2px 0px'

})

const MenuWelcome = styled.ul({
    display:'flex',
    justifyContent: 'space-between',
    alignContent: 'space-around',
    listStyleType: 'none',
    marginRight:'10rem',
    fontSize: '1.6rem'

})