import './App.css';
import React, { useState} from 'react';
import styled from 'styled-components'; 
import theme from './theme';
import './index.css';
import Nav from './Nav'


const {fonts} = theme;
const {colors} = theme;
function AdminLock() {

    const Container = styled.div`
        width: 100vw;
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
        width: 40vw;
        height: 2vw;
        font-size: 2vw;
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
    
    const [password, setPassword] = useState('');
    const [label, setLabel] = useState('');
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
                            
                            <input type="checkbox" onClick={myFunction}/>
                            {label}
                        </label>
                        
                        <Button>
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