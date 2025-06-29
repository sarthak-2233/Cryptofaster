import {
  AppBar,
  Container,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../Crytocontext";

const Header = () => {
  const navigate = useNavigate();
  const {currency,setCurrency}=CryptoState();
  
  const theme = createTheme({
    palette: {
      mode: "dark", 
      primary: {
        main: "#fff",
      },
    },
  });

  return (
    
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{ backgroundColor: "transparent" }}>
        <Container>
          <Toolbar>
            <Typography
              onClick={() => navigate("/")}
              variant="h6"
              sx={{
                flex: 1,
                color: "gold",
                fontFamily: "Montserrat",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Crypto Hunter
            </Typography>

            <Select
              variant="outlined"
              defaultValue={"USD"}
              sx={{
                width: 100,
                height: 40,
                marginLeft: 2,
                color: "white",
                borderColor: "white",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "gold",
                },
              }}
              value={currency} onChange={(e)=>setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
