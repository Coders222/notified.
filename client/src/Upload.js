import styled from 'styled-components'; 
import Nav from './Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast} from 'react-toastify';
import logo from './images/logo.png';
import theme from './theme';

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
        padding-top: 5vw;
        align-items: center;
        justify-content: center;
        background-color: ${colors.lightBeige}; 
        height:78.6vh;
        width: 100%;
    `
    const Header = styled.div`
        font-size:3vw;
        color: ${colors.mocha};
        font-weight: 900;
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
    const [files, setFiles] = useState([]);
    const [process, setProcess] = useState(false);
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();
    
    
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
    const onSubmit = (e) =>{
        e.preventDefault();
        console.log("Console");
        const data = new FormData();
        console.log(files);
        for(let i = 0; i < files.length; i++) {
            console.log(files[i]);
            data.append('file', files[i]);
        }
        console.log(data.getAll('file'));
        axios.post('//localhost:8888/upload', data)
            .then((response) => {
                toast.success('Upload Success');
                
            })
            .catch((e) => {
                toast.error('Upload Error')
        })
        setProcess(true);
    }
    return (
        <Container>
            <Nav/>
            <UploadContainer>
                <Header>Upload Notes</Header>
                <form method='post' onSubmit={onSubmit}>
                    <Oval type = "file" onChange={onInputChange} accept = "text/*" class="hideMe form-control col-lg-2 col-md-2 col-sm-2">
                    </Oval>
                    <Dropbox>
                        {selectedFile && preview}
                    </Dropbox>
                    <Submit>
                        Submit
                    </Submit>
                </form>
            </UploadContainer>
        </Container>
    );
  }
  
  export default Upload;