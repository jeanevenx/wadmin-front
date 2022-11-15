import React from 'react';
import styled from 'styled-components'
import '../styles/Welcome.css';
import Logo from './Logo';

const ProfileNavbar = (props) => {


    return (
        <div>
            <NavbarStyle>  
                <Logo UrlLogo="/profile"/>
                <div style={wrapperStyle}>
                    <OperationStyle style={elementStyle}>
                        <TextStyle style={textStyle}>{props.operation}</TextStyle>
                        <img 
                            src={props.operationImage} 
                            alt={props.operationName} 
                        />
                    </OperationStyle>

                    <div style={elementStyle}>
                        <p style={textStyle}>{props.username}</p>
                        <img 
                            style={imgStyle}
                            src={props.userImage} 
                            alt={props.username} 
                        />
                    </div>
                </div>
            </NavbarStyle>
        </div>
    )
}

export default ProfileNavbar;

const NavbarStyle = styled.nav({
    width:'100%',
    backgroundColor:'#FFF',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 1px 2px 0px'

})


const wrapperStyle = {
    display: 'flex',
    gap:'15rem'
    
}

const elementStyle = {
    display: 'flex',
    alignItems: 'center',
    gap:'.4rem'
}

const imgStyle = {
    marginRight: '10rem'
}

const textStyle = {
    marginTop: '.9rem',
    fontSize: '1.5rem'
}

const OperationStyle =styled.div({
    backgroundColor: '#1E94EB',
    paddingInline: '3.5rem',
    borderRadius:'.8rem'
})

const TextStyle = styled.p({
    color: 'white',
    fontWeight: '600'
})