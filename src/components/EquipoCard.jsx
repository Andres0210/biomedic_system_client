import React from "react";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const EquipoCard = (imagen) => {
  return (
    <div>
      {/* <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={imagen}
          alt="imagen de equipo"
        />
     
      </CardActionArea> */}
      <div>
        <img src={imagen} alt=""></img>
      </div>
    </div>
  );
};

export default EquipoCard;
