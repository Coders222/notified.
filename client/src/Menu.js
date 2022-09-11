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

    `
    const Math = styled.div`
        width: 15vw;
        height: 15vw;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-image: url(${img2});
        margin: auto;
        margin-bottom: 20vw;

    `
    const Chemistry = styled.div`
        width: 20vw;
        height: 20vw;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-image: url(${img3});
        margin: auto;
        margin-bottom: 20vw;

    `
    const Accounting = styled.div`
        width: 15vw;
        height: 15vw;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-image: url(${img1});
        margin: auto;        
        margin-bottom: 20vw;


    `


    return(
        <div>
            <Nav></Nav>
            <Container>

                <Row>
                    <Math>
                        Mathematics
                    </Math>

                    <Chemistry>

                    </Chemistry>
                    <Accounting>

                    </Accounting>
                </Row>

            </Container>
        </div>
    )
}


export default Images;