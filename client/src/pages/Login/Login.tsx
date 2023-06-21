import { useState } from "react";
import animationData from "../../assets/lottie/21474-medical-frontliners.json";
import animationLoading from "../../assets/lottie/loadingDoctor.json";
import {
  Container,
  StyledLottie,
  FormWrapper,
  ForgotPassword,
  FormTitle,
  StyledButton,
  StyledInput,
  LoadingScreen,
} from "./Login.styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { toast } from "react-toastify";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const test = "ddd77f03-0a7e-45f7-91e1-747bd1bac495";

  const navigate = useNavigate();
  const handlSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    axios
      .post("/api/users/login", data)
      .then((res) => navigate(`/Patient/${test}`))
      .catch((error) => toast.error(error))
      .finally(() => setLoading(false));
  };

  return !loading ? (
    <Container>
      <StyledLottie animationData={animationData} />
      <FormWrapper onSubmit={handlSubmit}>
        <FormTitle>Login</FormTitle>
        <StyledInput
          name="email"
          type="email"
          label="Email"
          id="input-with-icon-adornment"
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />
        <StyledInput
          name="password"
          type="password"
          id="input-with-icon-adornment"
          label="Password"
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />
        <StyledButton type="submit" variant="contained" disabled={loading}>
          Login
        </StyledButton>
        <ForgotPassword>Forgot password?</ForgotPassword>
      </FormWrapper>
    </Container>
  ) : (
    <Container>
      <LoadingScreen animationData={animationLoading} />
    </Container>
  );
};

export default Login;
