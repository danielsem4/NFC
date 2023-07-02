import { useNavigate } from "react-router-dom";
import {
  StyledAppBar,
  StyledToolbar,
  StyledStack,
  StyledButton,
} from "./MuiNavbar.style";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

export const MuiNavbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    axios.get("/api/users/logout").finally(() => navigate("/Login"));
  };

  return (
    <StyledAppBar position="static" color="default">
      <StyledToolbar>
        <StyledStack direction="row" spacing={2}>
          <StyledButton
            color="inherit"
            size="large"
            aria-label="logo"
            onClick={logout}
            startIcon={<CloseIcon />}
          >
            יציאה
          </StyledButton>
        </StyledStack>
      </StyledToolbar>
    </StyledAppBar>
  );
};
