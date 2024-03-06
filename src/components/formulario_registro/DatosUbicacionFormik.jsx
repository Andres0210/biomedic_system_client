import axios from "axios";
import React, { useEffect, useState } from "react";
import estilos from "../formulario_registro/formularioStyles.module.css";
import { Grid, Typography } from "@mui/material";
import Select from "./FormsUI/Select/index";

const DatosUbicacionFormik = ({ estiloLegend }) => {
  const [accesories, setAccesories] = useState([]);
  useEffect(() => {
    const getAccesoriesList = async () => {
      const response = await axios("http://localhost:8080/datosubicacion");
      setAccesories(response.data);
    };
    getAccesoriesList();
  }, []);
  const sedes = accesories?.map((accesorie) => {
    return accesorie.sede;
  });
  let conjuntoSedes = new Set(sedes);
  let sedesUnique = Array.from(conjuntoSedes);

  const servicios = accesories?.map((accesorie) => {
    return accesorie.servicio;
  });
  let conjuntoServicios = new Set(servicios);
  let serviciosUnique = Array.from(conjuntoServicios);

  const ubicaciones = accesories?.map((accesorie) => {
    return accesorie.ubicacion;
  });
  let conjuntoUbicaciones = new Set(ubicaciones);
  let ubicacionesUnique = Array.from(conjuntoUbicaciones);

  const localizaciones = accesories?.map((localizacion) => {
    return localizacion.localizacion;
  });
  let conjuntoLocalizaciones = new Set(localizaciones);
  let localizacionesUnique = Array.from(conjuntoLocalizaciones);

  return (
    <div>
      <Typography class="float-none w-auto p-2 text-sm-start" style={estiloLegend}>Ubicación</Typography>
      <Grid container spacing={3} sx={{ width: "100%" }}>
        <Grid item xs={12} md={6}>
          <Select
            name="datosUbicacion.sede"
            label="Sede"
            options={sedesUnique}
          ></Select>
        </Grid>
        <Grid item xs={12} md={6}>
          <Select
            name="datosUbicacion.servicio"
            label="Servicio"
            options={serviciosUnique}
          ></Select>
        </Grid>
        <Grid item xs={12} md={6}>
          <Select
            name="datosUbicacion.ubicacion"
            label="Ubicación"
            options={ubicacionesUnique}
          ></Select>
        </Grid>
        <Grid item xs={12} md={6}>
          <Select
            name="datosUbicacion.localizacion"
            label="Localización"
            options={localizacionesUnique}
          ></Select>
        </Grid>
      </Grid>
    </div>
  );
};

export default DatosUbicacionFormik;
