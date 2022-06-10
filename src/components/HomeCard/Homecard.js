import React from 'react'
import styled from 'styled-components'
import Button from '../Button/Button';

export default function Homecard({rev, btname}) {
  return (
    <Container rev={rev}>
        <Wrapper>
            <Box>
                <img src="/assets/ar.jpg" alt="" />
            </Box>
            <Box2>
                <Info>What we do</Info>
                <Line></Line>
                <Text>We are experts in our field with the comprehensive and country-specific knowhow, robust resources and skills to deliver quality results, on time and within budget, no matter the project scope or challenge.</Text>
                <Button btname={btname}></Button>
            </Box2>
        </Wrapper>
    </Container>
  )
}


const Line = styled.div`
background-color: #3E635B;
width: 100px;
height: 3px;
margin: 5px;
`;
const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;

@media screen and (max-width: 768px){
   margin-top: -10px;
}
`;
const Wrapper = styled.div`
width: 1000px;
display: flex;
justify-content: center;
align-items: center;


@media screen and (max-width: 768px){
    width: 100%;
    flex-direction: column;
    flex-wrap: wrap;
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

    @media screen and (max-width: 768px){
        width: 95%;
        height: 250px;
    }
}

@media screen and (max-width: 768px){
    width: 100%;
    margin: 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
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
const Text = styled.div`
font-size: 1rem;
margin: 5px 0;

@media screen and (max-width: 768px){
    width: 400px;
    text-align: center;
    font-size: 0.8rem;
    margin-bottom: 10px;
}
`;
const Info = styled.div`
font-size: 1.5rem;
font-weight: 500;

@media screen and (max-width: 768px){
   font-size: 1.4rem;
}
`;
