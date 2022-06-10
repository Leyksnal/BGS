import React from 'react'
import  styled from 'styled-components'

export default function WhoCard({mgn, mgnM}) {
  return (
    <Wrapper mgn={mgn} mgnM={mgnM}>
        <Title>Who we are</Title>
        <Span>As the first road link between Bonny Island to the rest of Rivers State, the Bodo-Bonny road is a milestone infrastructure development project for the advancement of the Niger</Span>
        <Line2></Line2>
    </Wrapper>
  )
}

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
width: max-content;
border: 2px solid #3E635B;
margin: ${({mgn}) => mgn};
border-radius: 8px;

@media screen and (max-width: 768px){
  width: 100%;
  margin: ${({mgnM}) => mgnM};}
`;

const Line2 = styled.div`
background-color: #3E635B;
width: 100%;
height: 2px;
margin: 5px 0;
`;

const Span = styled.div`
width: 500px;
font-size: 0.9rem;
margin: 5px 0;

@media screen and (max-width: 768px){
  width: 400px;
}
`;
const Title = styled.div`
font-size: 1.5rem;
font-weight: 500;
margin: 5px 0;
`;