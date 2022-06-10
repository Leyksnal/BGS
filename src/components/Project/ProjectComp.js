import React from 'react'
import styled from 'styled-components'
import {MdMoving} from 'react-icons/md'
import WhyComp from '../Whyus/WhyComp';
import WhoCard from '../WhoCard';

export default function ProjectComp() {
  return (
    <Container>
        <Wrapper>
            <Title>Our Projects</Title>
            <WhyComp/>
            <Handle>
                <Card>
                    <Dmg src="/assets/ar2.jpg"/>
                    <Info>Location: Ibeju Lekki</Info>
                </Card>
                <Card>
                    <Dmg src="/assets/ar.jpg"/>
                    <Info>Location: Ibeju Lekki</Info>
                </Card>
                <Card>
                    <Dmg src="/assets/ar4.jpg"/>
                    <Info>Location: Ibeju Lekki</Info>
                </Card>
                <Card>
                    <Dmg src="/assets/ar4.jpg"/>
                    <Info>Location: Ibeju Lekki</Info>
                </Card>
                <Card>
                    <Dmg src="/assets/ar4.jpg"/>
                    <Info>Location: Ibeju Lekki</Info>
                </Card>
                <Card>
                    <Dmg src="/assets/ar4.jpg"/>
                    <Info>Location: Ibeju Lekki</Info>
                </Card>
                <Card>
                    <Dmg src="/assets/ar4.jpg"/>
                    <Info>Location: Ibeju Lekki</Info>
                </Card>
                <Card>
                    <Dmg src="/assets/ar4.jpg"/>
                    <Info>Location: Ibeju Lekki</Info>
                </Card>
                <Card>
                    <Dmg src="/assets/ar4.jpg"/>
                    <Info>Location: Ibeju Lekki</Info>
                </Card>
            </Handle>
        </Wrapper>
    </Container>
  )
}


const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
padding-top: 70px;
`;
const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
`;
const Handle = styled.div`
display: flex;
flex-wrap: wrap;
width: 90%;
margin: 10px 0;
justify-content: center;
align-items: center;
`;
const Card = styled.div`
width: 380px;
height: 270px;
background-color: #022e24e1;
color: #fff;
margin: 5px;

@media screen and (max-width: 768px){
    margin: 10px 0;
}
`;
const Info = styled.div`
margin-left: 10px;
font-weight: 400;
`;
const Dmg = styled.img`
width: 100%;
height: 230px;
object-fit:  cover;
`;
const Title = styled.div`
font-size: 1.5rem;
font-weight: 500;
`;