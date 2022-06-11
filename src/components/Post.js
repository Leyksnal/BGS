import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import image from '../assets/ar.jpg';
import {BsFillCameraFill} from 'react-icons/bs';
import WhoCard from '../components/WhoCard'

export default function Post() {
  return (
    <Container>
        <P>
            <WhoCard mgn='20px 10px' mgnM='8px 8px' bg='#3E635B'/>
        </P>
      <Wrapper >
        <Gr>Upload Your Image</Gr>
        <Avatar src={image}/>
        <label htmlFor='pictureToUpload'>
          <BsFillCameraFill size={'1.3rem'}/>
          <input id="pictureToUpload" type="file" />
        </label>
        <Put>
          <input type="text" placeholder='Location' />
        </Put>
        <Button type='submit'>Post Now</Button>
        <Info><A to={'/'}>Go back home</A></Info>
      </Wrapper>
    </Container>
  )
}

const P = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
`;

const Avatar = styled.img`
    border: 3px solid #aaa;
    width: 300px;
    height: 200px;
    border-radius: 10px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 140px);
  color: #fff;
  padding-top: 60px;
  flex-direction: column;
`;
const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  background-color: #3E635B;
  border-radius: 10px;
  width: 400px;
  margin: 20px 0;

  label{
    border: 3px solid #aaa;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-top: 10px;

    input{
      display: none;
    }

    :hover{
      cursor: pointer;
    }
  }

  @media screen and (max-width: 768px){
    width: 400px;
  }
`;
const Put = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input{
    margin: 8px;
    padding: 10px;
    width: 300px;
    height: 18px;
    border-radius: 20px;
    outline: none;
    border: none;
    font-size: 0.9rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    font-family: "poppins";
  }

  textarea{
      resize: none;
      outline: none;
      border: none;
      width: 300px;
      border-radius: 10px;
      padding: 10px;
      height: 200px;
      margin: 8px;
      font-size: 1rem;
      font-family: "poppins";

  }
`;
const Gr = styled.div`
font-size: 1.5rem;
margin: 8px 0;
`;
const Info = styled.div`
margin-bottom: 10px;
`;


const Button = styled.button`
  width: 120px;
  height:35px;
  margin: 10px;
  border-radius: 20px;
  outline: none;
  border: 2px solid #fff;
  font-size: 1.1rem;
  background-color: transparent;
  transform: scale(1);
  transition: all 400ms;
  font-weight: 600;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  color: #fff;


  :hover{
    cursor: pointer;
    transform: scale(0.9)
  }
`;

const A = styled(Link)`
    font-weight: 700;
    cursor: pointer;
    color: #fff;
    text-decoration: none;
`;