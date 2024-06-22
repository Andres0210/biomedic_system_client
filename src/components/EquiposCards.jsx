import React from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useNavigate } from "react-router-dom";

export default function EquiposCards() {
  const navigate = useNavigate();
  const equipos = useSelector((state) => state.listaEquipos);
  const goToDetail = (id) => {
    navigate(`/device/${id}`);
  };
  console.log(equipos);
  return (
    <Container>
    
      <Grid2 container spacing={2}>
        {equipos?.map((equipo, index) => {
          return (
            <Grid2
              xs={12}
              md={6}
              lg={3}
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "16px",
                padding: "16px",
              }}
            >
              <Card
                onClick={() => {
                  goToDetail(equipo.id);
                }}
                style={{ width: "240px" }}
              >
                <CardActionArea>
                  <CardHeader
                    title={equipo.nombre}
                    sx={{ bgcolor: '#007882', textTransform:'uppercase', color:'#f2f2f2'  }}
                    titleTypographyProps={{fontSize:'13px', fontWeight:'bold'}}
               
                  />
                  <CardMedia
                    component="img"
                    image={equipo.imagen}
                    alt="equipo imagen"
                    style={{
                      height: "160px",
                      width: "160px",
                      margin:'0 auto',
                      marginTop: "10px",
                      marginBottom:'10px'
                     
                    }}
                  />
                  <Divider variant="middle" />
                  <CardContent style={{display: 'flex', justifyContent:'space-around'}}>
                    <Typography
                      style={{ textTransform: "uppercase" }}
                      gutterBottom
                      variant="body1"
                      component="div"
                      sx={{fontSize: '10px', bgcolor:'#A74D7E', borderRadius:'8px', padding:'8px', margin:'5px', color:'#f2f2f2', fontWeight:'bold'}}
                    >
                      {equipo.datosUbicacion.sede}
                    </Typography>
                    <Typography
                      style={{ textTransform: "uppercase" }}
                      gutterBottom
                      variant="body1"
                      component="div"
                      sx={{fontSize: '10px', bgcolor:'#547628', borderRadius:'8px', padding:'8px', margin:'5px', color:'#f2f2f2', fontWeight:'bold'}}
                    >
                      {equipo.datosUbicacion.servicio}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid2>
          );
        })}
      </Grid2>
    </Container>
  );
}
