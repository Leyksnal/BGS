import React from 'react'
import styled from 'styled-components'
import {FaChalkboardTeacher} from 'react-icons/fa'


export default function Impact() {
  return (
    <Container>
        <Rex>
            <Info>Impacts</Info>
            <Line3></Line3>
            <Pop>
                <Card2>
                    <Ava>
                        <span>5900</span>
                    </Ava>
                    <FaChalkboardTeacher size={'2rem'}/>
                    <Mes>successfully Projects</Mes>
                </Card2>
                <Card2>
                    <Ava>
                        <span>2500</span>
                    </Ava>
                    <FaChalkboardTeacher size={'2rem'}/>
                    <Mes>Successfull Projects</Mes>
                </Card2>
                <Card2>
                    <Ava>
                        <span>5090</span>
                    </Ava>
                    <FaChalkboardTeacher size={'2rem'}/>
                    <Mes>Successfull Projects</Mes>
                </Card2>
                <Card2>
                    <Ava>
                        <span>9800</span>
                    </Ava>
                    <FaChalkboardTeacher size={'2rem'}/>
                    <Mes>Successfull Projects</Mes>
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
width: 200px;
height: 200px;
border-radius: 50%;
background-color: #a9d7cd;
margin: 10px;
background: #01251d;
color: #fff;

@media screen and (max-width: 768px){
   margin: 10px 5px;
   width: 180px;
   height: 180px;
}
`;
const Pop = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
margin-top: 20px;
flex-wrap: wrap;
`;
const Rex = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
`;

const Ava = styled.div`
border: 3px solid #fff;
width: 60px;
height: 60px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
margin: 10px 0;
margin-bottom: 10px;

span{
    font-size: 1rem;
    font-weight: 600;
    color: #fff;

    @media screen and (max-width: 768px){
        font-size: 0.8rem;
    }
}

@media screen and (max-width: 768px){
    width: 45px;
    height: 45px;
    margin-top: -12px;
}
`;
const Mes = styled.div`
font-size: 0.8rem;
margin: 5px;
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

@media screen and (max-width: 768px){
   font-size: 1.4rem;
}
`;