import React from 'react'
import styled from 'styled-components'
import {BsFacebook, BsTwitter, BsTelegram, BsInstagram} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import {GiMineralHeart} from 'react-icons/gi'


export default function Footer() {
  return (
    <Container>
        <Wrapper>
            <Icons>
                <Follow>Follow us</Follow>
                <Icon1 />
                <Icon2 />
                <Icon3 />
            </Icons>
            <Set>
                <Follow>Email: BGS@support.com</Follow>
                <Follow>Phone: 08089876765</Follow>
            </Set>
            <Ava to='/'>
                <GiMineralHeart size={'2rem'} color={'#fff'}/>
                <Span><strong>BGS</strong></Span>
            </Ava>
        </Wrapper>
    </Container>
  )
}



const Icon3 = styled(BsTwitter)`
font-size: 1.5rem;
margin: 0 10px;
`;
const Icon2 = styled(BsFacebook)`
font-size: 1.5rem;
margin: 0 10px;
`;
const Icon1 = styled(BsInstagram)`
font-size: 1.5rem;
margin: 0 10px;
`;


const Ava = styled(Link)`
text-decoration: none;
display: flex;
align-items: center;
justify-content: center;
`;
const Span = styled.div`
color: #fff;
margin: 0 5px;
`;
const Follow = styled.div`
margin: 0 10px;
font-size: 0.8rem;
margin: 3px 0;
`;
const Set = styled.div`

@media screen and (max-width: 768px){
    margin-bottom: 10px;
}
`;

const Container = styled.div`
background-color: black;
color: #fff;
height: 80px;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
bottom: 0;

@media screen and (max-width: 768px){
    height: 150px;
}
`;
const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 90%;

@media screen and (max-width: 768px){
    flex-direction: column;
}
`;
const Icons = styled.div`
display: flex;
align-items: center;

@media screen and (max-width: 768px){
    margin: 10px 0;
}
`;