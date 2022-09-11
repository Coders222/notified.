import './App.css';
import logo from './images/logo.png';
import bg from './images/frontBackground.png'
import React from 'react';
import styled from 'styled-components'; 



function LandingPage() {

  const Container = styled.div`
    width: 99vw;
    height: 50vw;
    
  `

  const Header = styled.div`
    height: 7vw;
    width: 99vw;
    position: relative;
    display: flex;
  `
  const Logo = styled.div`

    height: 7vw;
    width: 21vw;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    left: 1vw;
  `
  const BackgroundDiv = styled.div`
    width: 99vw;
    height: 100vw;
    display: flex;
    justify-contents: center;

    

  `
  const Background = styled.div`
    width: 80vw;
    height: 50vw;
    margin-left: auto;
    margin-right: auto;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    
  `;
  
  const Textbox = styled.div`
    width: 30vh;
    height: 20vh;
    align-text: center;
    position: relative;

  `

  const Description = styled.div`
  
  
  `
  return (
    <Container>
        <Header>
          <Logo/>
        </Header>
        
          
        <BackgroundDiv>
          <Background>
              <Textbox>
              </Textbox>
          </Background>

        </BackgroundDiv>
         
          
    </Container>
    
  );
}

export default LandingPage;
