import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import {GiMineralHeart} from 'react-icons/gi'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {VscDebugStepBack} from 'react-icons/vsc'

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <Ava to='/'>
          <GiMineralHeart size={'2rem'} color={'#fff'}/>
          <Span><strong>BGS</strong></Span>
        </Ava>
        <Press>
          <Action to={'/'}><Button>Home</Button></Action>
          <Action to={'/about'}><Button>About us</Button></Action>
          <Action to={'/project'}><Button>Project</Button></Action>
          <Action to={'/contact'}><Button>Contact</Button></Action>
          <Action to={'/post'}><Button>Post</Button></Action>
          <Action to={'/register'}><Button>Login</Button></Action>
        </Press>
        <Tog>
          <Icon0 id='menu' onClick={() =>{
             document.getElementById("sidebar").style.width = "200px";
             document.getElementById("menu").style.display = "none";
             document.getElementById("close").style.display = "block";
          }} />
        </Tog>
        <Sidebar id='sidebar'>
          <Icon9 id='close' onClick={() =>{
              document.getElementById("sidebar").style.width = "0";
              document.getElementById("menu").style.display = "block";
              document.getElementById("close").style.display = "none";
              document.getElementById("close").style.transition = "all 300ms";
            }} />
            <Cal to={'/'}><Button>Home</Button></Cal>
            <Cal to={'/about'}><Button>About us</Button></Cal>
            <Cal to={'/project'}><Button>Project</Button></Cal>
            <Cal to={'/contact'}><Button>Contact</Button></Cal>
            <Cal to={'/post'}><Button>Post</Button></Cal>
            <Cal to={'/register'}><Button>Login</Button></Cal>
        </Sidebar>
      </Wrapper>
    </Container>
  )
}

const Sidebar = styled.div`
width: 0;
display: none;
height: 100vh;
overflow: hidden;
position: fixed;
overflow: hidden;
top: 0;
left: 0;
transition: all 400ms;
color: #fff;
display: none;
background: rgba( 62, 99, 91, 0.8 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 8.5px );
-webkit-backdrop-filter: blur( 8.5px );

 @media screen and (max-width: 500px){
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
 }
`;

const Cal = styled(Link)`
text-decoration: none;
font-size: 1rem;
padding: 12px 0;
cursor: pointer;
`;

const Tog = styled.div`
display: none;

@media screen and (max-width: 768px){
  display: block;
}
`;
const Icon0 = styled(BsThreeDotsVertical)`
display: none;
@media screen and (max-width: 768px){
  display: block;
  font-size: 1.3rem;
}
`;
const Icon9 = styled(VscDebugStepBack)`
display: none;
@media screen and (max-width: 768px){
  display: block;
  font-size: 1.3rem;
}
`;

const Container = styled.div`
background-color: #3E635B;
height: 60px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
color: #fff;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
color: #fff;
position: fixed;
z-index: 1;
top: 0;

@media screen and (max-width: 768px){
  width: 100%;
}
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Button = styled.button`
  width: max-content;
  background-color: transparent;
  color: #fff;
  font-size: 0.9rem;
  outline: none;
  border: none;
  transition: all 350ms;
  font-family: 'poppins';
  color: #fff;
  font-weight: 500;
  margin: 0 10px;
    :hover{
        cursor: pointer;
        background-color: transparent;
    }  
`;

const Ava = styled(Link)`
text-decoration: none;
display: flex;
align-items: center;
justify-content: center;
`;
const Press = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Span = styled.div`
color: #fff;
margin-left: 10px;
`;
const Action = styled(Link)`
text-decoration: none;
`;