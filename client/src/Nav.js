import styled from 'styled-components'; 
import logo from './images/logo.png';
function Nav() {
    const Container = styled.div`
        width: 99vw;
        height: 6vw;
        display:flex;
    `
    const Logo = styled.div`
        width:20vw;
        background-image: url(${logo});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    `
    const Links = styled.div`

        float: right;
        margin-top:auto;
    `
    const Link = styled.a`
        font-family: 'Poor Story', sans-serif;
        font-size:2vw;
        margin-left:3vw;
        text-decoration: none;
        &:hover{
            font-weight: 900;
        }
        color:#000000;
    `
    return (
        <Container>
            <Logo></Logo>
            <Links>
                <Link href='https://andyliang.xyz/'>Subjects</Link>
                <Link href='/#/about'>About</Link>
                <Link href='https://andyliang.xyz/'>Search</Link>
                <Link href='/#/upload'>Upload</Link>
            </Links>
        </Container>
    );
  }
  
  export default Nav;