import './App.css';
import logo from './images/logo.png';
import bg from './images/frontBackground.png'
import React from 'react';
import styled from 'styled-components'; 
import theme from './theme';
import './index.css';


const {fonts} = theme;
const {colors} = theme;
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

  const Background = styled.div`
    width: 90vw;
    height: 40vw;
    margin-top: 1vh;
    margin-left: auto;
    margin-right: auto;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    position: relative;

    
  `;
  
  const Textbox = styled.div`
    width: 40vw;
    height: 20vw;
    position: relative;
    margin: auto;
    bottom: 2vw;

  `

  const TextWrapper = styled.div`
    width: 33vw;
    height: 15vw;
    display: inline-block;
    position: relative;
    text-align: left;
    font-size: 5.0vw;
    color: ${colors.mocha};
    font-weight: 900;
    
  `

  const Oval = styled.button`
    &:hover {
        background-color: ${colors.mocha};
        transition: background-color 1s;
    }    
    &:active {
        background-color: #DDB892;
        background-size: 100%;
        transition: background 0s;
    }    
    width: 30vw;
    height: 8vh;
    background: #DDB892;
    border-radius: 50%;
    border: none;
    border-radius: 64px;
    position: fixed;
    display: inline-block;
    cursor: pointer;
    top: 38vw;
    left: 38vw;
    font-size: 2.0vw;
    color: #FFFFFF;
    font-weight: 900;
  `
  return (
    <Container>
        <Header>
          <Logo/>
        </Header>
        
          
        <Background>
            <Textbox>
                <TextWrapper>
                  The Robinhood for Students.
                </TextWrapper>
            </Textbox>
            <Oval> 
              Click to Start Noting
            </Oval>
        </Background>

         
          
    </Container>
    
  );
}

export default LandingPage;
