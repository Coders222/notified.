import './App.css';
import React, { useState} from 'react';
import styled from 'styled-components'; 
import theme from './theme';
import './index.css';
import Nav from './Nav'


const {fonts} = theme;
const {colors} = theme;
function Admin() {

    const Container = styled.div`
        width: 100vw;
        background-color: ${colors.lightBeige};
        height: 80vw;
        display: flex;
        justify-content: center;

    `

    return (
        <div>
            <Nav/>
            <Container>
                
            </Container>

        </div>
    )


}

export default Admin;