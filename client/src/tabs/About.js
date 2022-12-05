import './About.css';
import andy from '../images/andy.png';
import orion from '../images/orion.jpg';
import { HashRouter as Router,Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import Nav from '../Nav';

const {colors} = theme;
function About() {

    const Container = styled.div`
        width: 100vw;
        height: 100%;
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

    const Subtitle = styled.div`
        font-size: 40px;
        font-weight: 900;
        margin-top: 20vh;
        text-align: left;
        margin-right: 4vw;
    
    `
    const Description = styled.div`
        font-size: 27px;
        font-weight: 400;
        margin: center;
        text-align: left;
    
    `

    const Box = styled.div`
        height: 22vw;
        width: 32vw;
        margin: auto;
        margin-top: 2vh;
    `

    const Creator = styled.div`
        font-size: 30px;
        font-weight: 900;
        margin-top: 10vh;
    
    `
    const Name = styled.a`
        font-size: 15px;
        &:hover{
            font-weight: 900;
        }
    
    `

    const Picture = styled.div`
        width: 15vw;
        height: 15vw;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-image: url(${andy});
        margin: auto;
        margin-top: 1vw;
    
    `

    const Picture2 = styled.div`
        width: 15vw;
        height: 15vw;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-image: url(${orion});
        margin: auto;
        margin-top: 1vw;
    `

    return (
        <div>
            <Nav></Nav>
            <Container>
                <Row>
                    <Subtitle>
                        The Robinhood for students.
                        <Box>
                            <Description>
                                With students struggling, Notified is here to help.
                                Notified works with the community to allow users
                                to access premium tests and notes for free! In a
                                span of two seconds, you can access any of the
                                notes or tests with a single click! 💀
                            </Description>
                        </Box>
                    </Subtitle>
                </Row>
                <Row>
                    <Creator>
                        Creators
                        <Box>
                            <Name href='https://andyliang.xyz/'>
                                Andy Orion Nicky Kanaad
                            </Name>
                            <Picture></Picture> <Picture2></Picture2>
                        </Box>
                    </Creator>
                    
                </Row>
            </Container>

        </div>
    );
}

export default About;