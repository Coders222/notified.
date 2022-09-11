import './App.css';
import logo from './images/logo.png';
import React from 'react';
import styled from 'styled-components'; 


function landingPage() {

  const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

  `

  const Logo = styled.div`
    float:right;
    background-image: ${logo};
    width:2vw;
    height: 3.5vh;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: fixed;
  `
  const Textbox = styled.div`
    width: 30vh;
    height: 20vh;
    align-text: center;
    position: relative;


  `
  return (
    <Container>
        <Logo/>
            
        <Textbox>
         test
        </Textbox>
    </Container>
    
  );
}

export default landingPage;