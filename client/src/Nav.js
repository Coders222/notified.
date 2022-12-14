import styled from 'styled-components'; 
import logo from './images/logo.png';
import github from './images/gitLogo.png';
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

        display: flex;
        margin-top: auto;
    `
    const Link = styled.a`
        font-family: 'Poor Story', sans-serif;
        font-size:2vw;
        margin-left:2vw;
        text-decoration: none;
        &:hover{
            font-weight: 900;
        }
        color:#000000;
    `
    
    const Github = styled.a`
        width:3vw;
        background-image: url(${github});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 3vw;
        margin-right: 20px;
        margin-left: auto;
    `
    return (
        <Container>
            <Logo></Logo>
            <Links>
                <Link href='/#/menu'>Subjects</Link>
                <Link href='#/about'>About</Link>
                <Link href='https://andyliang.xyz/'>Search</Link>
                <Link href='/#/upload'>Upload</Link>
                <Link href='/#/admin'>Admin</Link>
            </Links>
            <Github href='https://github.com/Coders222/AutumnHacks' target="_blank"></Github>
        </Container>
    );
}
  
  export default Nav;