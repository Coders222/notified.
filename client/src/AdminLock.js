import './App.css';
import React, { useState} from 'react';
import styled from 'styled-components'; 
import theme from './theme';
import './index.css';
import Nav from './Nav'
import axios from 'axios';


const {fonts} = theme;
const {colors} = theme;
function AdminLock (props) {

    const Container = styled.div`
        width: 99.1vw;
        background-color: ${colors.lightBeige};
        height: 80vw;
        display: flex;
        justify-content: center;

    `
    const Header = styled.div`
        font-size:3vw;
        color: ${colors.mocha};
        font-weight: 900;
        margin-top: 10vw;
    `

    const Box = styled.div`
        width: 50vw;
    `
    
    const InputBox = styled.input`
        type: text;
        width: 20vw;
        height: 2vw;
        font-size: 2vw;
        margin-left: 8vw;
    `

    const Button = styled.button`
        width: 25vw;
        height: 5vw;
        font-weight: 900;
        font-size: 3vw;
        color: white;
        background: ${colors.title};
        margin-top: 2vw;

        &:hover{
            background-color: ${colors.mocha};
            transition: background-color 1s;
        }


    `

    function myFunction() {
        var x = document.getElementById("myInput");
        if (x.type === "password") {
          x.type = "text";
        } 
        else {
          x.type = "password";
        }
      }
    
    function onSubmit() {
        axios.post('http://localhost:5000/registers/login',{password:password})
        .then(res => res.json())
        .then(data => (data.admin && success));
    }
    const [password, setPassword] = useState('');
    var success = props.success;
    return (
        <div>
            <Nav/>
            <div>
                <Container>
                    <Box>
                        <Header>Enter Password</Header>
                        <InputBox
                            required
                            id="myInput"
                            onChange = {(e) => setPassword(e.target.value)}
                            value = {password}
                            autoFocus
                            type="password"
                            
                        ></InputBox>
                        <label>
                            
                            <input type="checkbox" onClick={myFunction} script="margin-left: 2vw"/>
                            Toggle Visibility
                        </label>
                        
                        <Button onClick = {onSubmit}>
                            Submit
                        </Button>
                        <h3>
                            Only real ones in here
                        </h3>
                    </Box>
                </Container>

            </div>
            

        </div>
    )


}

export default AdminLock;