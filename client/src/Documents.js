import './App.css';
import React from 'react';
import styled from 'styled-components'; 
import theme from './theme';
import Nav from './Nav';
import { useParams } from 'react-router-dom';


const {fonts} = theme;
const {colors} = theme;
function Documents(props) {
    const {subject} = useParams();
    const Container = styled.div`
        width: 100vw;
        height: 80vw;
        background-color: ${colors.lightBeige};
        display: flex;
        justify-content: center;

    `

    const Frame = styled.iframe`
        width: 80vw;
        height: 80vw;
    
    `

    return  (
        <div>
            <Nav/>
            <Container>
                <h1>{subject.charAt(0).toUpperCase()+subject.slice(1)}</h1>
            </Container>

        </div>
        
    );


}

export default Documents;