import React from 'react'
import styled from 'styled-components'
import Homecard from '../HomeCard/Homecard';

export default function Whatwedo() {
  return (
      <>
        <Container>
            <Title>Our experience and resources</Title>
        </Container>
        <Homecard btname={'See more'}/>
    </>
  )
}


const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;

@media screen and (max-width: 768px){
  margin-top: -120px;
}
`;
const Title = styled.div`
margin-top: 20px;
font-size: 1.8rem;

@media screen and (max-width: 768px){
  margin-top: 0;
  text-align: center;
  font-size: 1.2rem;
}
`;