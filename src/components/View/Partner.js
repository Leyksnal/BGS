import React from 'react'
import styled from 'styled-components'
import {FcEnteringHeavenAlive} from 'react-icons/fc'
import {GiPerpendicularRings, GiTransportationRings} from 'react-icons/gi'
import {SiAmazonfiretv, SiAppstore} from 'react-icons/si'
import {AiOutlineVerified} from 'react-icons/ai'


export default function Partner() {
  return (
    <Container>
        <Rex>
            <Info>Patners</Info>
            <Pop>
                <Part>
                    <FcEnteringHeavenAlive size={'3.5rem'}/>
                </Part>
                <Part>
                    <GiPerpendicularRings size={'3.5rem'}/>
                </Part>
                <Part>
                    <GiTransportationRings size={'3.5rem'}/>
                </Part>
                <Part>
                    <SiAmazonfiretv size={'3.5rem'}/>
                </Part>
                <Part>
                    <SiAppstore size={'3.5rem'}/>
                </Part>
                <Part>
                    <AiOutlineVerified size={'3.5rem'}/>
                </Part>
            </Pop>
        </Rex>
    </Container>
  )
}


const Part = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100px;
background-color: red;
margin: 10px;
color: #fff;
`;

const Pop = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
flex-wrap: wrap;

@media screen and (max-width: 768px){
    flex-wrap: wrap;
}
`;
const Rex = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
`;
const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-bottom: 20px;
`;
const Info = styled.div`
font-size: 1.5rem;
font-weight: 500;
`;