import './App.css';
import img from './images/logo.png';
import React from 'react';
import styled from 'styled-components'; 


function App() {

  const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

  `
  const Textbox = styled.div`
    width: 30vh;
    height: 20vh;


  `
  return (
    <Container>
      <Textbox>
        test
      </Textbox>
    </Container>
    
  );
}

export default App;
