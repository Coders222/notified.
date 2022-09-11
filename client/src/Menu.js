import React from 'react';
import img1 from './images/AccountingLogo.png';
import img2 from './images/MathLogo.png';
import img3 from './images/ScienceLogo.png';
import './Menu.css';
import Nav from './Nav';
import styled from 'styled-components';
import theme from './theme'; 


const {colors} = theme;
function Images(){

    const Container = styled.div`
        width: 100vw;
        background-color: ${colors.lightBeige};
        display: flex;
        justify-content: center;
    `

    const Row = styled.div`
        width: 80vw;
        height: 44.4vw;
        display: flex;
        justify-content: center; 
        vertical-align: middle;

    `
    const Math = styled.div`
        width: 15vw;
        height: 15vw;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-image: url(${img2});
        margin: auto;
        margin-top: 1vw;

    `
    const Chemistry = styled.div`
        width: 15vw;
        height: 15vw;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-image: url(${img3});
        margin: auto;
        margin-top: 1vw;


    `
    const Accounting = styled.div`
        width: 15vw;
        height: 15vw;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-image: url(${img1});
        margin: auto;
        margin-top: 1vw;
                
    `

    const Box = styled.a`
        height: 22vw;
        width: 20vw;
        margin: auto;
        border-style: solid;
        background-color: transparent;
        border-color: black;
        color: black;
            &:hover {
        background-color: ${colors.mocha};
        transition: background-color 1s;
    }    
    &:active {
        background-color: #DDB892;
        background-size: 100%;
        transition: background 0s;
    }   

    `

    const Subtitle = styled.div`
        font-size: 3.0vw;
        font-weight: 900;
        margin-top: 1vw;
    `



    return(
        <div>
            <Nav></Nav>
            <Container>

                <Row>
                    <Box href='/#/documents'>
                        <Math/>
                        <Subtitle>Math</Subtitle>
                    </Box>
                   
                    <Box href='/#/documents'>
                        <Chemistry/>
                        <Subtitle>Chemistry</Subtitle>


                    </Box>
                    
                    <Box href='/#/documents'>
                        <Accounting/>
                        <Subtitle>Accounting</Subtitle>

                    </Box>


                </Row>

            </Container>
        </div>
    )
}


export default Images;