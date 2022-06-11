import React from 'react'
import styled from 'styled-components'
import {MdVerifiedUser} from 'react-icons/md'

export default function Team() {
  return (
    <Container>
        <Rex>
            <Info>Our Team</Info>
            <Line3></Line3>
            <Pop>
                <Card2>
                    <Ava2 src="/assets/ar2.jpg"/>
                    <MdVerifiedUser size={'1.3rem'}/>
                    <Mes>Kelly Allen</Mes>
                    <Mes1>Marketing Inspector</Mes1>
                </Card2>
                <Card2>
                    <Ava2 src="/assets/ar2.jpg"/>
                    <MdVerifiedUser size={'1.3rem'}/>
                    <Mes>Kelly Allen</Mes>
                    <Mes1>Marketing Inspector</Mes1>
                </Card2>
                <Card2>
                    <Ava2 src="/assets/ar2.jpg"/>
                    <MdVerifiedUser size={'1.3rem'}/>
                    <Mes>Kelly Allen</Mes>
                    <Mes1>Marketing Inspector</Mes1>
                </Card2>
                <Card2>
                    <Ava2 src="/assets/ar2.jpg"/>
                    <MdVerifiedUser size={'1.3rem'}/>
                    <Mes>Kelly Allen</Mes>
                    <Mes1>Marketing Inspector</Mes1>
                </Card2>
            </Pop>
        </Rex>
    </Container>
  )
}

const Card2 = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
width: 250px;
border-radius: 5px;
background-color: #022e24e1;
color: #fff;
margin: 10px;

@media screen and (max-width: 768px){
    margin: 10px 5px;
    width: 380px;
}
`;
const Pop = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
margin-top: 20px;
flex-wrap: wrap;

@media screen and (max-width: 768px){
flex-wrap: wrap;
flex-direction: column;
}
`;
const Rex = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
`;
const Ava2 = styled.img`
width: 100px;
height: 100px;
border-radius: 50%;
object-fit: cover;
margin: 10px 0;
`;
const Mes = styled.div`
font-size: 0.9rem;
`;

const Mes1 = styled.div`
font-size: 1rem;
margin-bottom: 10px;
`;
const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 20px;
`;

const Line3 = styled.div`
background-color: green;
width: 100px;
height: 1.5px;
`;
const Info = styled.div`
font-size: 1.5rem;
font-weight: 500;
`;