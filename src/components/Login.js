import React, { useState } from 'react'
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios';
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2';

export default function Login() {

  const navigate = useNavigate();
	const [error, setError] = useState("");

  const formSchema =yup.object().shape({
    email: yup.string().email().required("This filed cnnot be empty*"),
    password: yup.string().required("This feild must be filled*")
  })

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(formSchema)
  })


  const onSumb = handleSubmit(async (value) =>{
    const mode = "https://bgs-backend-app.herokuapp.com/"
    const url = `${mode}api/admin/signin`

  await axios.post(url, value).then(() =>{
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Welcome back on board",
      showConfirmButton: false,
      timer: 2500,
    }).then(() => {
      navigate("/");
    });
  }).catch((err) => {
    setError(err.response.data.message);
  });

  })



  return (
    <Container>
      <Wrapper >
        <Gr>Login as an Admin</Gr>
        <Form onSubmit={onSumb} type="multipart/form-data">
          <Error>{errors.email?.message}</Error>
          <input type="email" placeholder='email' {...register("email")}/>
          <Error>{errors.password?.message}</Error>
          <input type="password" placeholder='password' {...register("password")}/>
          <Button type="submit" >Login</Button>
          <Info>Don't have an account <A to={'/register'}>Sign Up</A></Info>
        </Form>
      </Wrapper>
    </Container>
  )
}



const Error = styled.div`
	color: red;
	font-weight: 500;
	font-size: 12px;
`;


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 80px);
  color: #fff;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  background-color: #3E635B;
  border-radius: 5px;
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input{
    margin: 8px;
    padding: 10px;
    width: 300px;
    height: 18px;
    border-radius: 5px;
    outline: none;
    border: none;
    font-size: 0.9rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`;
const Gr = styled.div`
font-size: 1.4rem;
font-weight: 500;
padding: 5px 0;
`;
const Info = styled.p`

`;


const Button = styled.button`
  width: 120px;
  height:35px;
  margin: 10px;
  border-radius: 5px;
  outline: none;
  border: 2px solid #fff;
  font-size: 1.1rem;
  background-color: transparent;
  transform: scale(1);
  transition: all 400ms;
  font-weight: 400;
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
    color: #000;
    text-decoration: none;
`;

const Avatar = styled.img`
    border: 2px solid #fff;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;