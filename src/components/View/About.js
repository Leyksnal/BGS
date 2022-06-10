import React from 'react'
import styled from 'styled-components'
import {MdConstruction, MdVerifiedUser} from 'react-icons/md'
import {FaChalkboardTeacher} from 'react-icons/fa'
import {FcEnteringHeavenAlive} from 'react-icons/fc'
import {GiPerpendicularRings, GiTransportationRings} from 'react-icons/gi'
import {SiAmazonfiretv, SiAppstore} from 'react-icons/si'
import {AiOutlineVerified} from 'react-icons/ai'
import Impact from './Impact'
import Team from './Team'
import Partner from './Partner'
import WhoCard from '../WhoCard'


export default function About() {
  return (
    <Container>
        <P>
            <WhoCard mgn='20px 10px' mgnM='8px 8px'/>
            <WhoCard mgn='20px 10px' mgnM='8px 8px'/>
            <WhoCard mgn='20px 10px' mgnM='8px 8px'/>
        </P>
        <Wrapper2>
            <Box>
                <img src="/assets/ar.jpg" alt="" />
            </Box>
            <Box2>
                <Card>
                    <Icon>
                        <MdConstruction size={'2.5rem'}/>
                    </Icon>
                    <Content>
                        <Top>AP Computer Science</Top>
                        <Bottom>2 New AP® CS courses endorsed by the College Board.</Bottom>
                    </Content>
                </Card>
                <Card>
                    <Icon>
                        <MdConstruction size={'2.5rem'}/>
                    </Icon>
                    <Content>
                        <Top>AP Computer Science</Top>
                        <Bottom>2 New AP® CS courses endorsed by the College Board.</Bottom>
                    </Content>
                </Card>
                <Card>
                    <Icon>
                        <MdConstruction size={'2.5rem'}/>
                    </Icon>
                    <Content>
                        <Top>AP Computer Science</Top>
                        <Bottom>2 New AP® CS courses endorsed by the College Board.</Bottom>
                    </Content>
                </Card>
            </Box2>
        </Wrapper2>
        <Impact/>
        <Team/>
        <Partner/>
    </Container>
  )
}

const P = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 80%;
flex-wrap: wrap;

@media screen and (max-width: 768px){
    flex-wrap: wrap;
    width: 100%;
}

`;

const Container = styled.div`
padding-top: 80px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
`;
const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
width: max-content;
border: 2px solid #3E635B;
margin-top: 10px;
border-radius: 8px;
`;
const Span = styled.div`
width: 500px;
font-size: 0.9rem;
margin: 5px 0;
`;
const Title = styled.div`
font-size: 1.5rem;
font-weight: 500;
margin: 5px 0;
`;
const Wrapper2 = styled.div`
width: 1000px;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 20px;

@media screen and (max-width: 768px){
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
}
`;
const Box = styled.div`
width: 500px;
height: 300px;
margin: 0 10px;

img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
}

@media screen and (max-width: 768px){
        width: 95%;
        height: 250px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 0;
}
`;
const Box2 = styled.div`
width: 500px;
margin: 0 10px;

@media screen and (max-width: 768px){
    width: 100%;
    margin: 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
`;
const Line3 = styled.h2`
background-color: green;
width: 100px;
height: 3px;
margin-top: -20px;
`;
const Line = styled.h2`
background-color: green;
width: 150px;
height: 3px;
margin-top: -20px;
`;
const Info = styled.h2`
font-size: 1.5rem;
font-weight: 500;
margin-top: 50px;
`;
const Card = styled.div`
display: flex;
width: 350px;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
background-color: #3E635B;
color: #fff;
border-radius: 8px;
margin: 10px;
transition: all 300ms;

:hover{
    transform: scale(0.95);
    cursor: pointer;
}

@media screen and (max-width: 768px){
    margin: 10px  0;
}
`;
const Icon = styled.div`
margin: 10px;
`;
const Content = styled.div`
margin: 10px;
`;
const Top = styled.div`
font-size: 1.2rem;
`;
const Bottom = styled.div`
font-size: 0.9rem;
width: 300px;
`;