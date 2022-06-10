import React from 'react'
import styled from 'styled-components'
import {MdConstruction} from 'react-icons/md'

export default function WhyComp() {
  return (
    <Container>
        <Holder>
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
        </Holder>
    </Container>
  )
}

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 20px;
`;
const Holder = styled.div`
width: 90%;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
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
    margin: 8px 0;
    width: 300px;
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

@media screen and (max-width: 768px){
   font-size: 1rem;
}
`;
const Bottom = styled.div`
font-size: 0.9rem;
width: 260px;

@media screen and (max-width: 768px){
   font-size: 0.7rem;
   width: 200px
}
`;