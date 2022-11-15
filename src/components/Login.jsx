import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import styled from 'styled-components';
import '../styles/Login.css';

import AuthService from "../services/auth.service";

import Navbar from './Navbar'

const required = (value) => {
    if (!value) {
        return (
            <div className="invalid-feedback d-block">
                Campo obrigatório
            </div>
        );
    }
};

const Login = () => {
    
    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        setMessage("");
        setLoading(true);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            AuthService.login(username, password).then(
                () => {
                    navigate("/profile");
                    window.location.reload();
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    setLoading(false);
                    setMessage(resMessage);
                }
            );
        } else {
            setLoading(false);
        }
    };

    return (
        <Container>
            <Navbar UrlLogo="/login"/>
            <Wrapper>
                <Titulo>Realizar Login</Titulo>
                <Form onSubmit={handleLogin} ref={form}>
                    <FormInput>
                        <Label htmlFor="username">Usuário</Label>
                        <Input
                            type="text"
                            className="form-control"
                            name="username"
                            value={username}
                            onChange={onChangeUsername}
                            validations={[required]}
                        />
                    </FormInput>

                    <FormInput>
                        <Label htmlFor="password">Senha</Label>
                        <Input
                            type="password"
                            className="form-control"
                            name="password"
                            value={password}
                            onChange={onChangePassword}
                            validations={[required]}
                        />
                    </FormInput>
                    <BtnEntrar className="btn btn-primary btn-block" disabled={loading}>
                            {loading && (
                                <span className="spinner-border spinner-border-sm"></span>
                            )}
                            <span>Login</span>
                    </BtnEntrar>
                    <CriarConta>
                        Não tem conta? 
                        <a href="/register"> Criar uma</a>
                    </CriarConta>
                   

                    {message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>
            </Wrapper>
            
        </Container>
    );
};

export default Login;


const Container = styled.div({
    width:'100%',
    height:'100vh'
})

const Wrapper = styled.div({
    width:'60%',
    margin:'0 auto'
})

const Titulo =styled.h1({
    marginTop:'10rem',
    marginBottom:'2.5rem',
    fontSize:'3rem',
    textAlign:'center'

})

const FormInput = styled.div({
    width:'50%',
    paddingBlock:'1rem',
    margin:'0 auto'
})

const Label = styled.label({
    fontSize:'1.5rem',
    fontWeight:'300'
})

const BtnEntrar = styled.button({
    backgroundColor:'#1E94EB',
    borderStyle:'none',
    color:'#FFF',
    paddingBlock:'1rem',
    width:'50%',
    marginTop:'1.5rem',
    borderRadius:'.8rem',
    fontWeight:'600',
    fontSize:'1.5rem',
    marginLeft:'25%',

})

const CriarConta = styled.p({
    fontSize:'1.5rem',
    marginTop:'1.2rem',
    marginLeft:'25%',
})