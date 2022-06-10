import React from 'react'
import styled from 'styled-components'
import {MdConstruction} from 'react-icons/md'


export default function Service() {
  return (
    <Container>
        <Wrapper>
            <Title>Our Service</Title>
            <Span>As the first road link between Bonny Island to the rest of Rivers State, the Bodo-Bonny road is a milestone infrastructure development project for the advancement of the Niger Delta and a catalyst for the continued success of Bonny Island - a key industrial area in Nigeria tied to the economic development and general wellbeing of the Nation as a whole.</Span>
            <Line2></Line2>
        </Wrapper>
        <Wrapper2>
            <Box>
                <img src="/assets/ar.jpg" alt="" />
            </Box>
            <Box2>
                <Info>What we do</Info>
                <Line></Line>
                <Text>Technically, the road is a massive undertaking with many construction challenges due to the low lying marshy area, muddy and swampy soil conditions and considerable tidal movements. The scope comprises construction of a 39 km long road, cross culverts and two mini bridges with a span of 23 m each as well as two creek bridges, Afa Creek Bridge of about 530 m length and Nanabie Creek Bridge of about 640 m length, in addition to the construction of a major river bridge of about 750 m length over the Opobo Channel. The scope comprises construction of a 39 km long road,</Text>
                <Card>
                    <Icon>
                        <MdConstruction size={'4rem'}/>
                    </Icon>
                    <Content>
                        <Top>AP Computer Science</Top>
                        <Bottom>2 New AP® CS courses endorsed by the College Board.</Bottom>
                    </Content>
                </Card>
            </Box2>
        </Wrapper2>
        <Wrapper3>
            <Box2>
                <Info>What we do</Info>
                <Line></Line>
                <Text>Technically, the road is a massive undertaking with many construction challenges due to the low lying marshy area, muddy and swampy soil conditions and considerable tidal movements. The scope comprises construction of a 39 km long road, cross culverts and two mini bridges with a span of 23 m each as well as two creek bridges, Afa Creek Bridge of about 530 m length and Nanabie Creek Bridge of about 640 m length, in addition to the construction of a major river bridge of about 750 m length over the Opobo Channel. The scope comprises construction of a 39 km long road,</Text>
                <Card>
                    <Icon>
                        <MdConstruction size={'4rem'}/>
                    </Icon>
                    <Content>
                        <Top>AP Computer Science</Top>
                        <Bottom>2 New AP® CS courses endorsed by the College Board.</Bottom>
                    </Content>
                </Card>
            </Box2>
            <Box>
                <img src="/assets/ar.jpg" alt="" />
            </Box>
        </Wrapper3>
        <Wrapper4>
            <Box>
                <img src="/assets/ar.jpg" alt="" />
            </Box>
            <Box2>
                <Info>What we do</Info>
                <Line></Line>
                <Text>Technically, the road is a massive undertaking with many construction challenges due to the low lying marshy area, muddy and swampy soil conditions and considerable tidal movements. The scope comprises construction of a 39 km long road, cross culverts and two mini bridges with a span of 23 m each as well as two creek bridges, Afa Creek Bridge of about 530 m length and Nanabie Creek Bridge of about 640 m length, in addition to the construction of a major river bridge of about 750 m length over the Opobo Channel. The scope comprises construction of a 39 km long road,</Text>
                <Card>
                    <Icon>
                        <MdConstruction size={'4rem'}/>
                    </Icon>
                    <Content>
                        <Top>AP Computer Science</Top>
                        <Bottom>2 New AP® CS courses endorsed by the College Board.</Bottom>
                    </Content>
                </Card>
            </Box2>
        </Wrapper4>
    </Container>
  )
}


const Container = styled.div`
padding-top: 60px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;
const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
`;
const Span = styled.p`
width: 750px;
font-size: 1.2rem;
margin-top: -20px;
`;
const Title = styled.h2`
font-size: 2rem;
`;
const Wrapper4 = styled.div`
width: 75%;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 100px;
`;
const Wrapper3 = styled.div`
width: 75%;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 100px;
`;
const Wrapper2 = styled.div`
width: 75%;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 30px;
`;
const Box = styled.div`
width: 600px;
height: 450px;

img{
    width: 100%;
    height: 100%;
    border-radius: 15px;
}
`;
const Box2 = styled.div`
width: 550px;
`;
const Text = styled.p`
font-size: 1rem;
`;
const Line2 = styled.h2`
background-color: green;
width: 500px;
height: 2px;
margin-top: -5px;
`;
const Line = styled.h2`
background-color: green;
width: 150px;
height: 2px;
margin-top: -20px;
`;
const Info = styled.h2`
font-size: 1.5rem;
font-weight: 500;
`;
const Card = styled.div`
display: flex;
justify-content: space-between;
width: 400px;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
background-color: #3E635B;
color: #fff;
border-radius: 10px;
`;
const Icon = styled.div`
margin: 10px;
`;
const Content = styled.div`
margin: 10px;
`;
const Top = styled.p`
font-size: 1.2rem;
margin-top: -5px;
`;
const Bottom = styled.div`
font-size: 1rem;
width: 300px;
margin-top: -20px;
`;