import styled from 'styled-components'; 
import Nav from './Nav';
import { useState } from 'react';
import axios from 'axios';
import { toast} from 'react-toastify';
import logo from './images/logo.png';
import theme from './theme';

const {fonts} = theme;
const {colors} = theme;
function Upload() {
    const Container = styled.div`
        width: 99vw;
        height: 5vw;
        display: flex;
        flex-direction: column;
        

    `
    const Dropbox = styled.div`
        display: flex;
        flex-direction: column;
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
  `
    const [files, setFiles] = useState([]);
    const [process, setProcess] = useState(false);

    const onInputChange = (e) => {
        setFiles(e.target.files)
    };
    const onSubmit = (e) =>{
        e.preventDefault();

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
                <Oval type = "file" onChange={onInputChange} accept = "text/*">
                </Oval>
                <Dropbox>
                    
                </Dropbox>
            </UploadContainer>
        </Container>
    );
  }
  
  export default Upload;