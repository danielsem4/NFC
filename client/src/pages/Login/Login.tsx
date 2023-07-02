import { useState } from "react";
import animationData from "../../assets/lottie/21474-medical-frontliners.json";
import {
  Container,
  StyledLottie,
  FormWrapper,
  ForgotPassword,
  FormTitle,
  StyledButton,
  StyledInput,
  CheckBox,
  RememberMeWrapper,
  RememberMeText,
  LogoImg,
  TitleWrapper,
} from "./Login.styles";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { toast } from "react-toastify";
import Logo from "../../assets/img/Logo.png";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { state } = useLocation();
  console.log(state);

  const navigate = useNavigate();
  const handlSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // route to the patient from the tag / to add new patient and connect him to new tag
    const nextPath = state?.patientId ? `/Patient/${state.patientId}` : "/Home";

    axios
      .post("/api/users/login", data)
      .then((res) => navigate(nextPath))
      .catch((error) => toast.error("Wrong email/password, pls try again"))
      .finally(() => setLoading(false));
  };

  return (
    <Container>
      <StyledLottie animationData={animationData} />
      <FormWrapper onSubmit={handlSubmit}>
        <TitleWrapper>
          <LogoImg src={Logo} title="Logo" />
          <FormTitle>Login</FormTitle>
        </TitleWrapper>
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
        <RememberMeWrapper>
          <CheckBox name="rememberMe" />
          <RememberMeText>Remember me</RememberMeText>
        </RememberMeWrapper>
        <StyledButton
          loading={loading}
          type="submit"
          variant="contained"
          disabled={loading}
        >
          Login
        </StyledButton>
        <ForgotPassword>הזן מייל וסיסמה כללית</ForgotPassword>
      </FormWrapper>
    </Container>
  );
};

export default Login;
