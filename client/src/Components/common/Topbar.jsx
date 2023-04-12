import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from '@mui/material/Button'

function Topbar() {

  const logout=()=>{
    localStorage.clear();
    window.location.reload(true);
  }
  return (
    <AppBar
      position="fixed"
      sx={{
        width: "100%",
        height: 70,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            height: 70,display:'flex',justifyContent:'space-between'
          }}
          
        >
          <Typography
            sx={{
              fontSize: 30,
            }}
          >
            Usha Sri Project 
          </Typography>
          <Button style={{color:'#fff'}} onClick={logout}>Logout</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Topbar;
