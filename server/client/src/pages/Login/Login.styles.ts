import styled from "styled-components";
import Lottie from "lottie-react";
import { TextField } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';


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

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LogoImg = styled.img`
  max-width: 40%;
  
  @media (max-width: 1147px) {
    max-width: 50%;
  }
`

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 20px;
  padding-inline: 50px;
  padding-block: 5px;
  max-width: 30rem;
  box-shadow: 0px 6px 12px #000000;
  border-radius: 10px;
  backdrop-filter: blur(3px);
`;

export const StyledLottie = styled(Lottie)`
  width: 85%;
  max-width: 33rem;
`;

export const FormTitle = styled.h2`
  font-size: 2rem;
  margin-block-start: 0;
  margin-block-end: 0;
  color: #56bd8d;
  font-weight: bold;
  align-self: flex-start;
  

`;

export const ForgotPassword = styled.text`
  font-size: 1rem;
  margin-top: 1.3rem;
  font-weight: 500;
`

export const FormInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2rem;
  width: 100%;
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
  width: 100%; 
}
`

export const StyledButton = styled(LoadingButton)`
 &&{
  width: 100%;
  background: #56bd8d;
  letter-spacing: 0.1rem;
 }

 &&:hover{
  background: #24b329;
 }
`

export const RememberMeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding-block: 1rem;
  gap: 5px;
`

export const RememberMeText = styled.label`
  font-size: 1rem;

`

export const CheckBox = styled.input.attrs({type: "checkbox"})`
  width: 16px;
  height: 16px;
  border-radius: 3px;
  transition: all 150ms;
`

export const LoadingScreen = styled(Lottie)`
  width: 85%;
  max-width: 32rem; 
`