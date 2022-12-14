import '../App.css';
import React, { useState } from 'react';
import styled from 'styled-components'; 
import theme from '../theme';
import Nav from '../Nav';
import { useParams } from 'react-router-dom';
import testIcon from '../images/testIcon.png';
import noteIcon from '../images/noteIcon.png';
import useFetch from '../data/useFetch';

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
        frameBorder:0;
    
    `
    const DataWrapper = styled.div`
        display:flex;
        padding-top:3vw;
    `
    const FrameWrapper = styled.div`
        background-color: ${colors.tan};
        margin-left:auto;
        margin-right:10vw;
        width: 40vw;
        height: 40vw;
        display:flex;
        justify-content:center;
        
    `
    const File = styled.div`
        margin-bottom:2vw;
        padding-left:2vw;
        font-family: 'Poor Story', sans-serif;
        font-size:1.2vw;
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
    const Empty = styled.div`
        font-size:2vw;
        margin-top:auto;
        margin-bottom:auto;
        font-weight:900;
    `

    
    
    const {topic,subject} = useParams();
    let subjectData = useFetch("https://staynotified.herokuapp.com/documents/"+subject + "/" + topic,true).data;
    console.log(subjectData);
    if(subjectData) subjectData = subjectData[0];
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
                <h1>{subject.charAt(0).toUpperCase()+subject.slice(1) + " - " + topic.charAt(0).toUpperCase()+topic.slice(1)}</h1>
                <DataWrapper>
                    <FileNav>
                        <h2>Files</h2>
                        {files}
                    </FileNav>
                    <FrameWrapper>
                        {curFile && <Frame src={curFile}></Frame>}
                        {!curFile && <Empty>Choose a File</Empty>}
                    </FrameWrapper>
                    
                </DataWrapper>
            </Container>

        </div>
        
    );


}

export default Documents;