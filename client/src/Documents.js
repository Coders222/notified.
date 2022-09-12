import './App.css';
import React, { useState } from 'react';
import styled from 'styled-components'; 
import theme from './theme';
import Nav from './Nav';
import { useParams } from 'react-router-dom';
import data from './Documents.json';
import testIcon from './images/testIcon.png';
import noteIcon from './images/noteIcon.png';

const {fonts} = theme;
const {colors} = theme;
function Documents(props) {
    const Container = styled.div`
        padding-top:3vw;
        width: 99.2vw;
        height: 80vw;
        background-color: ${colors.lightBeige};
        justify-content: center;

    `
    const FileNav = styled.div`
        width: 20vw;
        height : 40vw;
        background-color: ${colors.tan};
        display:flex;
        flex-direction:column;
        margin-left:10vw;
        overflow-y:scroll;
    `
    const Frame = styled.iframe`
        width: 40vw;
        height: 40vw;
        
    
    `
    const DataWrapper = styled.div`
        display:flex;
        padding-top:3vw;
    `
    const FrameWrapper = styled.div`
        background-color: ${colors.tan};
        margin-left:auto;
        margin-right:10vw;
    `
    const File = styled.div`
        margin-bottom:2vw;
        padding-left:2vw;
        font-family: 'Poor Story', sans-serif;
        font-size:1.5vw;
        display:flex;
        cursor: pointer;
        &:hover {
            font-weight:900;
            transition: background-color 1s;
    `
    const Icon = styled.img`
        width:2vw;
        height:2.5vw;
        margin-right:2vw;
    `

    
  
    const {subject} = useParams();
    let subjectData = undefined;
    if(subject in data){
        subjectData = data[subject];
        console.log(subjectData)
    }
    const [curFile, setCurFile] = useState(undefined);
    let tests = (subjectData!= undefined? subjectData.tests:undefined);
    let notes = (subjectData!= undefined? subjectData.notes:undefined);
    const files = (subjectData== undefined? <div>No Files Found</div> : 
        notes.map((value)=>(
            <File onClick={() => {setCurFile(value.link)}}><Icon src={noteIcon}></Icon>{value.name}</File>
        )).concat(tests.map((value) => (
            <File onClick={() => (

                setCurFile(value.link))}><Icon src={testIcon}></Icon>{value.name}</File>
        )))
    );
    console.log(curFile);
    return  (
        <div>
            <Nav/>
            <Container>             
                <h1>{subject.charAt(0).toUpperCase()+subject.slice(1)}</h1>
                <DataWrapper>
                    <FileNav>
                        <h2>Files</h2>
                        {files}
                    </FileNav>
                    <FrameWrapper>
                    <Frame src={curFile}></Frame>
                    </FrameWrapper>
                    
                </DataWrapper>
            </Container>

        </div>
        
    );


}

export default Documents;