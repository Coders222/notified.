import styled from 'styled-components'; 
import Nav from './Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast} from 'react-toastify';
import logo from './images/logo.png';
import theme from './theme';
import data from './Documents.json';

const {fonts} = theme;
const {colors} = theme;
function Upload() {
    
    const Container = styled.div`
        width: 100vw;
        
        display: flex;
        flex-direction: column;
        

    `
    const Dropbox = styled.div`
        display: flex;
        flex-direction: column;
        width:50vw;
        height:10vw;
        overflow-y:scroll;
        justify-content: space-between;
        background-color: #FFFFFF; 
    `
    const UploadContainer = styled.div`
        display: flex;
        flex-direction: column;
        padding-top: 3vw;
        align-items: center;

        background-color: ${colors.lightBeige}; 
        height:78.6vh;
        width: 100%;
    `
    const Header = styled.div`
        font-size:3vw;
        color: ${colors.mocha};
        font-weight: 900;
        margin-bottom:2vw;
    `
    const Oval = styled.input`
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
        display: inline-block;
        cursor: pointer;
        font-size: 2.0vw;
        font-weight: 900;
        text-indent: -999em;
        content: Choose File;
        margin-bottom:3vw;
    `
    const Button = styled.button`
        width: 15vw;
        height: 4vh;
        background: #DDB892;
        border-radius: 25%;
        border: none;
        cursor: pointer;
    `
    const Submit = styled.button`
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
        display: inline-block;
        cursor: pointer;
        font-size: 2.0vw;
        font-weight: 900;
        margin-top:3vw;
    `
    const LinkIn = styled.input`
        margin-bottom:2vw;
    `
    const Form = styled.form`
        margin-top:2vw;
    `
    const Subject = styled.div`
        height:2vw;
        width: 10vw;
        border: solid;
        &:hover {
            background-color: ${colors.mocha};
            transition: background-color 0.5s;
        }
    `
    const Subjects = styled.div`

        display:flex;
        margin-left:auto;
        margin-right:auto;
        margin-bottom:1vw;
    `
    const subjects = data.subjects;
    const fTypes = data.fileTypes;
    const [files, setFiles] = useState([]);
    const [process, setProcess] = useState(false);
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();
    const [type, setType] = useState(0);
    const [subject, setSubject] = useState(subjects[0]);
    const [fType, setFType] = useState(fTypes[0]);
    const [link, setLink] = useState(undefined);
    const [name, setName] = useState("unititled");
    
    const onInputChange = (e) => {
        setFiles(e.target.files)
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        setSelectedFile(e.target.files[0])
        const reader = new FileReader()
        reader.onload = function(e) {
            var content = reader.result;
            setPreview(content);
            console.log(preview);
        }
        reader.readAsText(e.target.files[0]);
        console.log(preview);
    };
    const onLinkChange = (e) =>{
        setLink(e.target.value);
    }
    const onNameChange = (e) =>{
        setName(e.target.value);
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        if(link){
            const inFile = {
                name: name,
                link: link
            };
            data.files[subject][fType].append(inFile);
 
        }
    }
    const chooseSub = subjects.map((value)=>{
        const styles = {
            backgroundColor: value == subject?colors.mocha: "transparent",
            height:"2vw",
            width: "10vw",
            border: "solid",

        }
        return (value == subject)?<Subject onClick={() => {setSubject(value)}} style = {styles} >{value}</Subject>:<Subject onClick={() => {setSubject(value)}}>{value}</Subject>;
    });
    const chooseType = fTypes.map((value)=>{
        const styles = {
            backgroundColor: value == fType?colors.mocha: "transparent",
            height:"2vw",
            width: "10vw",
            border: "solid",

        }
        return (value == fType)?<Subject onClick={() => {setFType(value)}} style = {styles} >{value}</Subject>:<Subject onClick={() => {setFType(value)}}>{value}</Subject>;
    });
    return (
        <Container>
            <Nav/>
            <UploadContainer>
                <Header>Upload Notes</Header>
                
                <Button onClick={()=> (setType((type+1)%2))}>{type == 0?"File Mode" : "Link Mode"}</Button>
                <Form method='post' onSubmit={onSubmit}>
                    {type == 0 && <Oval type = "file" onChange={onInputChange} accept = "text/*" class="hideMe form-control col-lg-2 col-md-2 col-sm-2"></Oval>}
                    {type == 1 && <LinkIn type="text" defaultValue = "Link" onChange={onLinkChange}></LinkIn>}
                    {type == 1 && <LinkIn type="text" defaultValue = "File Name" onChange={onNameChange}></LinkIn>}
                    <Subjects>{chooseSub}</Subjects>
                    <Subjects>{chooseType}</Subjects>
                    <Dropbox>
                        {type == 0 && selectedFile && preview}
                        {link && <iframe src = {link}></iframe>}
                    </Dropbox>
                    <Submit>
                        Submit
                    </Submit>
                </Form>
                
            </UploadContainer>
        </Container>
    );
  }
  
  export default Upload;