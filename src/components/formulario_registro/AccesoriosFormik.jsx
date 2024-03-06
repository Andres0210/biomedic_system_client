import React from "react";
import estilos from "../formulario_registro/formularioStyles.module.css";
import { FormGroup, Grid, Typography } from "@mui/material";
import TextField from "./FormsUI/TextField/index";
import { FieldArray } from "formik";

const AccesoriosFormik = ({
  estiloLegend,
  datosRegistro,
  handleAccesorioChange,
  handleRemoveAccesorio,
  handleAddAccesorio,
}) => {
  return (
    <Grid container spacing={3} sx={{ width: "100%" }}>
      <Grid item xs={12}>
        <Typography>Accesorios</Typography>
        <FieldArray
          name="accesorios"
          render={({ push, remove }) => (
            <div>
              {datosRegistro.accesorios.map((accesorio, index) => (
                <div key={index}>
                  <TextField
                    name={`accesorios.${index}.accesorio`}
                    label="Nombre del Accesorio"
                  />
                  <TextField
                    name={`accesorios.${index}.cantidad`}
                    label="Cantidad"
                    type="number"
                  />
                  <button type="button" onClick={() => remove(index)}>
                    Remover
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => push({ accesorio: "", cantidad: 0 })}
              >
                Agregar Accesorio
              </button>
            </div>
          )}
        />
      </Grid>
    </Grid>
  );
};

export default AccesoriosFormik;
