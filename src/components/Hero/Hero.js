import React from 'react'
import styled from 'styled-components'

export default function Hero() {
  return (
    <Container>
      <Background>
        <img src='/assets/hero.png' alt="" />
      </Background>
      {/* <Content> */}
        {/* <Tag> */}
          <Info>We deliver innovative solutions for value driven project</Info>
        {/* </Tag> */}
      {/* </Content> */}
    </Container>
  )
}


const Container = styled.footer`
color: #fff;
padding-top: 60px;
display: flex;
justify-content: center;
width: 100%;
height: calc(100vh - 100px);
flex-direction: column;
position: relative;
align-items: center;

@media screen and (max-width: 768px){
  height: 500px;
}
`;
const Background = styled.div`
top: 0;
bottom: 0;
left: 0;
right: 0;
position: absolute;
z-index: -1;

img{
  width: 100%;
  height: 100%;
  object-fit:  cover;

  @media screen and (max-width: 768px){
    width: 100%;
    height: 500px;
  }
}

@media screen and (max-width: 768px){
    height: 500px;
  }

`;
const Info = styled.div`
font-size: 2.5rem;
text-align: center;
width: 800px;

@media screen and (max-width: 768px){
  font-size: 1.2rem;
  width: 300px;

}
`;