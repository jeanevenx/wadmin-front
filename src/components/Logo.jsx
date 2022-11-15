import React from 'react';
import styled from 'styled-components'
import logo from '../assets/logo.svg';


const Logo = (props) => {


    return (
        <div> 
            <LogoStyle>
                <a href={props.UrlLogo}>
                    <LogoImg src={logo} alt="Logo" /> 
                </a>
                <a href={props.UrlLogo}>
                    <LogoText>WADMIN</LogoText> 
                </a>
            </LogoStyle>
        </div>
    )
}

export default Logo;

const LogoStyle = styled.div({
    display:'flex',
    marginInline:'10rem'

})

const LogoImg = styled.img({
     width: '3.8rem',
     marginTop:'1rem',
})

const LogoText = styled.p({
    marginTop:'2rem',
    marginBottom:'1.7rem',
    fontSize: '1.5rem',
    fontWeight:'700',
    color:'#1E94EB'
})