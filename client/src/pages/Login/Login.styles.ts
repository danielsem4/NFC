import styled, { keyframes } from "styled-components";
import Lottie from "lottie-react";
import { Button, TextField } from "@mui/material";


export const Container = styled.div`
  min-height: 100vh;
  min-height: 100dvh;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
  flex-wrap: wrap;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  max-width: 30rem;
  box-shadow: 0px 6px 12px #000000;
  padding: 1rem;
  border-radius: 10px;
  backdrop-filter: blur(3px);
`;

export const StyledLottie = styled(Lottie)`
  width: 85%;
  max-width: 32rem;
`;

export const FormTitle = styled.h2`
  font-size: 2rem;
  margin-block-start: 0;
  color: #1a569c;
  font-weight: bold;
`;

export const ForgotPassword = styled.text`
  font-size: 1rem;
  margin-top: 1.3rem;
  font-weight: 500;

`

export const FormInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2rem;
  width: 80%;
  height: 2.5rem;
  padding: 0.7rem;
  border: none;
  outline: none;
  margin-top: 1rem;

  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #009872;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #000000;
    font-size: 1rem;
    font-weight: 100;
  }
`;

export const StyledInput = styled(TextField)`
&&{
  margin-top: 1rem;
  width: 80%; 
}
`

export const StyledButton = styled(Button)`
 &&{
  width: 80%;
  background: #1a569c;
  letter-spacing: 0.1rem;
  margin-top: 1rem;
 }

 &&:hover{
  background: #24b329;
 }
`

export const LoadingScreen = styled(Lottie)`
  width: 85%;
  max-width: 32rem; 
`