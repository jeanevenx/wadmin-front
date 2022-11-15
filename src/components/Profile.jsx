import React from 'react';
import AuthService from "../services/auth.service";
import PlusCircleFill from '../assets/plusCircleFill.svg'
import PersonCircle from '../assets/personCircle.svg'
import styled from 'styled-components'

import ProfileNavbar from './ProfileNavbar'

const Profile = () => {

    const currentUser = AuthService.getCurrentUser();

    return (
        <Container>
            <ProfileNavbar 
                operation="Adicionar"
                operationImage={PlusCircleFill}
                operationName="Adicionar" username={currentUser.username}
                userImage={PersonCircle}
            />
        </Container>
    );
};

export default Profile;

const Container = styled.div({
    width: '100%',
})