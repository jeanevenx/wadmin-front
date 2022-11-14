import React, {useState, useEffect} from 'react';
import UserService from '../services/user.service';
import styled from 'styled-components'
import graphic1 from '../assets/graphic1.png'
import '../styles/Welcome.css';
import { Person } from 'react-bootstrap-icons';

import WelcomeNavbar from './WelcomeNavbar'



const Welcome = () => {

    const [content, setContent] = useState("");

    useEffect(() => {
        UserService.getPublicContent().then(
            (response) => {
                console.log(response.data);
                setContent(response.data);
                console.log(content);
            },
            (error) => {
                const _content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();

                setContent(_content);
            }
        )
    },[]);


    return(
        <Container>
            <WelcomeNavbar/>
             
            <WelcomeBodyContainer>
                <WelcomeBodyItem className="welcome-left">
                    <h1>Welcome to Wadmin</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius nesciunt consectetur suscipit aliquam ex iusto quia exercitationem dolores commodi, possimus laboriosam ducimus, velit animi itaque quisquam non consequatur debitis harum!
                    </p>
                    
                    <a 
                        className="btn-cadastrar-1" 
                        href="/register"
                    >
                        <Person color="white" size={24} />
                        <span>Cadastre-se</span>
                    </a>
                    <p className="btn-entrar-left">
                        Já tem uma conta? <a href="/login">Entrar</a>
                    </p>
                    
                </WelcomeBodyItem>
                <WelcomeBodyItem className="wel-graphic">
                    <img src={graphic1} alt=""/>
                </WelcomeBodyItem>
            </WelcomeBodyContainer>
        </Container>
    );

}

export default Welcome;


const Container = styled.section({
    height:'100vh',
    width:'100%',
    top:'0',
    bottom:'0',
    backgroundColor:'#F8F8F8'
})



const WelcomeBodyContainer = styled.section({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '.6rem',
    justifyItems: 'center',
})
const WelcomeBodyItem = styled.div({
    marginTop: '5rem',
    marginInline: '10rem',
    fontSize:'1.6rem',
    alignItems: 'center'

})
