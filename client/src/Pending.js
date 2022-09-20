import './App.css';
import React, { useState} from 'react';
import styled from 'styled-components'; 
import theme from './theme';
import './index.css';
import Nav from './Nav'
import axios from 'axios';

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
    const {name, type,topic, subject, link,id,refresh} = props.data;
    function onAccept(){
        const file = {
            name: name,
            type: type,
            topic: topic,
            subject :subject,
            link: link
        };
        console.log(file);
        axios.post('https://staynotified.herokuapp.com/update',file)
        .then(res => console.log(res.data));
        remove();
    }
    function remove(){
        axios.delete('https://staynotified.herokuapp.com/pendings/'+id)
        .then(response => { console.log(response.data)});
        refresh();
    }
    return (
        <div>
            <Pending>
                <h2>{name}</h2>
                <h3>{type}</h3>
                <h3>{subject + " - " + topic}</h3>
                <ButtonWrapper>
                    <Button onClick={onAccept}>Accept</Button>
                    <Button onClick={remove}>Deny</Button>
                    <Button ><Link target="_blank" href={link}>Link</Link></Button>
                </ButtonWrapper>
            </Pending>
        </div>
    )


}

export default Pending;