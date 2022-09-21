import styled from 'styled-components'; 
import Nav from './Nav';
import { useState, useEffect, useMemo, useRef } from 'react';
import axios from 'axios';
import { toast} from 'react-toastify';
import logo from './images/logo.png';
import theme from './theme';
import data from './Documents.json';
import useForm  from './useForm';

const {fonts} = theme;
const {colors} = theme;
const Container = styled.div`
        width: 100vw;
        
        display: flex;
        flex-direction: column;
        

    `
const Dropbox = styled.div`
    display: flex;
    flex-direction: column;
    width:50vw;
    height:40vh;

    justify-content: space-between;
    background-color: #FFFFFF; 
`
const UploadContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 3vw;
    align-items: center;

    background-color: ${colors.lightBeige}; 
    height:120vh;
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
    margin-top:1vw;
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
    
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid ${colors.orange};
    outline: 0;
    font-size: 1.3rem;
    color: $white;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;

    &::placeholder {
    color: transparent;
    }

    &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
    }
    &:focus{
        ~ .form__label {
            position: absolute;
            top: 0;
            display: block;
            transition: 0.2s;
            font-size: 1rem;
            color: $primary;
            font-weight:700;    
        }
        padding-bottom: 6px;  
        font-weight: 600;
        border-width: 3px;
        border-image: linear-gradient(to right, ${colors.darkBlue},${colors.lightBlue});
        border-image-slice: 1;
        transition: border-image 2s;
    }
`
const Label = styled.label`
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: ${colors.orange};
`
const InWrap = styled.div`
    position: relative;
    padding: 15px 0 0;
    margin-top: 10px;
    width: 100%;
`
const Form = styled.div`

    margin-bottom:1vw;
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
function Upload() {
    
    
    
    const subjects = data.subjects;
    const fTypes = data.fileTypes;
    const [files, setFiles] = useState([]);
    const [process, setProcess] = useState(false);
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();
    const [type, setType] = useState(1); //for file type i.e PDF or link
    // const [fType, setFType] = useState(fTypes[0]);
    // const [link, setLink] = useState(undefined);
    // const [fName, setFName] = useState("unititled");
    const [file, setFile] = useState({
        topic: `Untitled Topic`,
        subject: subjects[0],
        name: "untitled",
        type: fTypes[0],
        link: undefined,
    })
    
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
        e.preventDefault();
        let link = e.target.value;
        let temp = link.split("/");
        if(temp[2] === "drive.google.com"){
            link = link.substring(0,link.lastIndexOf("/"))+"/preview";
        }
        
        setFile({...file,link :link});

    }

    const onNameChange = (e) =>{
        e.preventDefault();
        setFile({...file,name : e.target.value});
        
    }
    const onTopicChange = (e) => {
        e.preventDefault();
        setFile({...file,topic:e.target.value});
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        console.log("submitted")
        if(file.link){
            
            axios.post('https://staynotified.herokuapp.com/pendings/add',file)
            .then(res => console.log(res.data));
        }
    }
    const chooseSub = subjects.map((value)=>{
        const styles = {
            backgroundColor: value == file.subject?colors.mocha: "transparent",
            height:"2vw",
            width: "10vw",
            border: "solid",

        }
        return (value == file.subject)?<Subject onClick={() => {setFile({...file, subject:value})}} style = {styles} >{value}</Subject>:<Subject onClick={() => {setFile({...file, subject:value})}}>{value}</Subject>;
    });
    const chooseType = fTypes.map((value)=>{
        const styles = {
            backgroundColor: value == file.type?colors.mocha: "transparent",
            height:"2vw",
            width: "10vw",
            border: "solid",

        }
        return (value == file.type)?<Subject onClick={() => {setFile({...file, type:value})}} style = {styles} >{value}</Subject>:<Subject onClick={() => {setFile({...file, type:value})}}>{value}</Subject>;
    });


    const fileView = useMemo(() => (<iframe height = "100%" src = {file.link}></iframe>), [file.link]);
    return (
        <Container>
            <Nav/>
            
            <UploadContainer>
                <Header>Upload Notes</Header>
                <Button onClick={()=> (setType((type+1)%2))}>{type == 0?"File Mode" : "Link Mode"}</Button>
                    {type == 0 && <Oval type = "file" onChange={onInputChange} accept = "text/*" class="hideMe form-control col-lg-2 col-md-2 col-sm-2"></Oval>}
                    <Form className='form'>
                        {type == 1 && <InWrap>
                            <LinkIn autoComplete = "off" name = "link" placeholder = "Link" onChange={onLinkChange} value = {file.link}/>
                            <Label class="form__label" for = "link">Link</Label></InWrap>
                        }
                        {<InWrap>
                           <LinkIn autoComplete = "off"  name = "name" type="text" placeholder = "Name" onChange={onNameChange} value = {file.name}></LinkIn>
                           <Label class="form__label" for = "name">Name</Label>
                           </InWrap>}
                        {<InWrap>
                            <LinkIn autoComplete = "off" name = "topic" type="text" placeholder = "topic" onChange = {onTopicChange} value= {file.topic}></LinkIn>
                            <Label class="form__label" for = "topic">Topic</Label>
                        </InWrap>}

                    </Form>
                    <Subjects>{chooseSub}</Subjects>
                    <Subjects>{chooseType}</Subjects>
                    <Dropbox>
                        {type == 0 && selectedFile && preview}
                        {type == 1 && file.link && fileView}
                    </Dropbox>
                    <Submit onClick={onSubmit}>
                        Submit
                    </Submit>
            </UploadContainer>
        </Container>
    );
  }
  
  export default Upload;