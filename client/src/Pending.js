import './App.css';
import React, { useState} from 'react';
import styled from 'styled-components'; 
import theme from './theme';
import './index.css';
import Nav from './Nav'


const {fonts} = theme;
const {colors} = theme;
function Pending(props) {
    const Pending = styled.div`
        border: solid;
        padding:1vw;
        margin:2vw;
        
    `
    const Button = styled.button`
        
    `
    const Link = styled.a`
        text-decoration:none;
        
    `
    const ButtonWrapper = styled.div`
        display:flex;
    `
    const {name, type,topic, subject, link,id} = props.data;
    function onAccept(){

    }
    function onDeny(){

    }
    return (
        <div>
            <Pending>
                <h2>{name}</h2>
                <h3>{type}</h3>
                <h3>{subject + " - " + topic}</h3>
                <ButtonWrapper>
                    <Button onClick={onAccept}>Accept</Button>
                    <Button onClick={onDeny}>Deny</Button>
                    <Button ><Link target="_blank" href={link}>Link</Link></Button>
                </ButtonWrapper>
            </Pending>
        </div>
    )


}

export default Pending;