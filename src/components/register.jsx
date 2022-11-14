import React, {useState, useRef} from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import {useNavigate} from "react-router-dom";
import CheckButton from "react-validation/build/button";
import {isEmail} from "validator";
import styled from 'styled-components';
import '../styles/Register.css';
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

const validEmail = (value) => {
    if (!isEmail(value)) {
        <div className="invalid-feedback d-block">
                Email inválido
            </div>
    }
};

const validUsername = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="invalid-feedback d-block">
                Usuário deve ter entre 3 e 20 caracteres de tamanho
            </div>
        );
    }
}

const validPassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="invalid-feedback d-block">
                A senha deve ter entre 6 e 40 caracteres
            </div>
        );
    }
}

const Register = (props) => {

    const form = useRef();
    const checkBtn = useRef();
    const navigate = useNavigate();

    

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleRegister = (e) => {

        e.preventDefault();

        setMessage("");
        setSuccessful(false);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            
            AuthService.register(username, email, password).then(
                (response) => {
                    setMessage(response.data.message);
                    setSuccessful(true);
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    setMessage(resMessage);
                    setSuccessful(false);
                }
            );
        }
    };

    return (
            <Container>
                <Navbar/>
                <Titulo> Crie Sua Conta</Titulo>
                <Wrapper>
                    <Form onSubmit={handleRegister} ref={form}>
                            {
                                !successful && (
                                    <div >
                                        <FormInput className="form-group">
                                            <Label htmlFor="username">Usuário</Label>
                                            <Input
                                                type="text"
                                                className="form-input form-control"
                                                name="username"
                                                value={username}
                                                onChange={onChangeUsername}
                                                validations={[required, validUsername]}
                                            />
                                        </FormInput>

                                        <FormInput>
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                type="text"
                                                className="form-input form-control"
                                                name="email"
                                                value={email}
                                                onChange={onChangeEmail}
                                                validations={[required, validEmail]}
                                            />
                                        </FormInput>

                                        <FormInput>
                                            <Label htmlFor="password">Senha</Label>
                                            <Input
                                                type="password"
                                                className="form-input form-control"
                                                name="password"
                                                value={password}
                                                onChange={onChangePassword}
                                                validations={[required, validPassword]}
                                            />
                                        </FormInput>

                                        
                                        <BtnCriar>Crie Sua Conta</BtnCriar>
                                        <ContaExistente>
                                            Já tem uma conta? 
                                            <a href="/login"> Entrar</a>
                                        </ContaExistente>
                                    </div>
                                )}

                                {message && (
                                <Message>
                                    <div
                                        className={
                                            successful ? "alert alert-success" : "alert alert-danger"

                                        }
                                        role="alert"
                                    >
                                        {message}
                                    </div>
                                </Message>
                            )}
                            <CheckButton style={{ display: "none" }} ref={checkBtn} />
                    </Form>
                    { successful && navigate("/login")}
                </Wrapper>
            </Container>
    )
};

export default Register;


const Container = styled.div({
    width:'100%',
    height:'100vh'
})

const Wrapper = styled.div({
    width:'60%',
    marginLeft:'20rem'
})

const Titulo =styled.h1({
    marginTop:'10rem',
    marginBottom:'2.5rem',
    fontSize:'3rem',
    marginLeft:'20rem'

})

const FormInput = styled.div({
    width:'50%',
    paddingBlock:'1rem'
})

const Label = styled.label({
    fontSize:'1.5rem',
    fontWeight:'300'
})

const BtnCriar = styled.button({
    backgroundColor:'#1E94EB',
    borderStyle:'none',
    color:'#FFF',
    paddingBlock:'1rem',
    width:'25%',
    marginTop:'.5rem',
    borderRadius:'.2rem',
    fontWeight:'600',
    fontSize:'1.5rem'
})

const Message = styled.div({
    width:'25%',
    marginTop:'.5rem'
})

const ContaExistente = styled.p({
    fontSize:'1.5rem',
    marginTop:'1.2rem'
})