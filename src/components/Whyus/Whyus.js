import React from 'react'
import styled from 'styled-components'
import WhyComp from './WhyComp';

export default function Whyus() {
  return (
    <Container>
        <Title>Our experience and resources</Title>
        <Holder>
            <WhyComp/>
        </Holder>
    </Container>
  )
}

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;
const Title = styled.h2`
margin-top: 20px;
font-size: 1.5rem;
`;
const Holder = styled.div`
width: 100%;
`;