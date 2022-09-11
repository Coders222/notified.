import './App.css';
import React from 'react';
import styled from 'styled-components'; 
import theme from './theme';
import Nav from './Nav';


const {fonts} = theme;
const {colors} = theme;
function Documents() {

    const Container = styled.div`
        width: 99vw;
        height: 100vw;
    `

    return  (
        <Container>
            <Nav/>

           

        </Container>
    );


}

export default Documents;