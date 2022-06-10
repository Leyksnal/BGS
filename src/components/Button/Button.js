import React from 'react'
import styled from 'styled-components'

export default function Button({btname}) {
  return (
    <div>
        <Click>{btname}</Click>
    </div>
  )
}

const Click = styled.button`
  width: max-content;
  height: 40px;
  background-color: #3E635B;
  color: #fff;
  font-size: 0.9rem;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: all 350ms;
  transform: scale(1);
  font-family: 'poppins';
  border: 2px solid #fff;
  color: #fff;
  font-weight: 500;
    :hover{
        cursor: pointer;
        transform: scale(1.1);
        background-color: transparent;
        border: 2px solid #3E635B;
        color: black;
    }  
`;