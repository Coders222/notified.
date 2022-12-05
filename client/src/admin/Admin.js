import '../App.css';
import React, { useState} from 'react';
import styled from 'styled-components'; 
import theme from '../theme';
import '../index.css';
import AdminView from './AdminView';
import AdminLock from './AdminLock';


const {fonts} = theme;
const {colors} = theme;
function Admin() {

    const Container = styled.div`
        width: 100vw;
        background-color: ${colors.lightBeige};
        height: 80vw;
        display: flex;
        justify-content: center;

    `
    const [success, setSuccess] = useState(false);
    return (
        <div>
            {(success) ? <AdminView/> : <AdminLock success= { ()=>{setSuccess(true)}}/>}
        </div>
    )


}

export default Admin;