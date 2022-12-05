import '../App.css';
import React, { useState} from 'react';
import styled from 'styled-components'; 
import theme from '../theme';
import '../index.css';
import Nav from '../Nav'
import axios from 'axios';
import Pending from './Pending'
import useFetch from '../data/useFetch';

const {fonts} = theme;
const {colors} = theme;
function AdminView(props) {
    
    const Container = styled.div`
        width: 100vw;
        background-color: ${colors.lightBeige};
        height: 80vw;
        display: flex;
        justify-content: center;

    `
    const Preview = styled.div`
        margin-top: 5vw;
        margin-left:3vw;
    `
    const PendingWrapper = styled.div`
        display:flex;
        padding-left:5vw;
        padding-right:5vw;
        width:60vw;
        overflow-x:scroll;
        border:solid;
    `
    const [refresh, setRefresh] = useState(false);
    const values =  useFetch('https://staynotified.herokuapp.com/pendings/',refresh);
    console.log(values);
    let pendings = undefined;
    
    const toggleRefresh = () =>
        (setRefresh(!refresh));
    
    if(values.data){
        pendings = values.data.map((value)=><Pending data = {{
            name:value.name,
            type:value.type,
            subject:value.subject,
            topic:value.topic,
            link:value.link,
            id:value._id,
            re: toggleRefresh
        }}></Pending>)
    }

    return (
        <div>
            <Nav/>
            <Container>
                <Preview>
                    <h3>Pending Notes</h3>
                    <PendingWrapper>
                        {(pendings)?pendings:"Loading"}
                    </PendingWrapper>
                    <button onClick={toggleRefresh}>Refresh</button>
                </Preview>
            </Container>

        </div>
    )


}

export default AdminView;