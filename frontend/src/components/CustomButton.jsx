import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
const ColorButton = styled(Button)(({ theme }) => ({
  color: "#000000",
  backgroundColor: "#A1B251",
  marginRight: "8%",
  fontFamily: "Rounded Mplus",
  "&:hover": {
    backgroundColor: "#A1B251",
  },
}));
export default ColorButton;
