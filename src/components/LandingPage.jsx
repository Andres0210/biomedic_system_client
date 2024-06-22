import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, ImageList, ImageListItem, Typography } from "@mui/material";
import "./landingEstilos.css";


const LandingPage = () => {
  const navigate = useNavigate();

  const ingresar = () => {
    navigate("/equipos");
  };
  return (
    <Box class="contenedor">
      <Box class="imagenContainer"></Box>
      <Card class="loginContainer">
      <Typography class="loginTitle" variant="body2">Bienvenido a Biomedic System</Typography>
        <Button onClick={ingresar} type="button" class="botonIngresar">
          INGRESAR
          </Button>
      </Card>
    </Box>
  );
};

export default LandingPage;
