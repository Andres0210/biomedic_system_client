import React from "react";
import { Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
} from "@mui/material";
import TextField from "./FormsUI/TextField";
import SendIcon from "@mui/icons-material/Send";
import Select from "./FormsUI/Select";

const INITIAL_FORM_STATE = {
  nombre: "",
  marca: "",
  modelo: "",
  serie: "",
  inventario: "",
  imagen: "",
  invima: "",
  calibracion: null,
  riesgo: "",
  clas_biomedica: "",
  tecnologia: "",
  periocidad: "",
  datosTecnicos: {
    voltaje: 0,
    corriente: 0,
    frecuencia: 0,
    potencia: 0,
    temperatura: 0,
    humedad: 0,
    peso: 0,
    bateria: 0,
  },
  datosAdquisicion: {
    forma_adquisicion: "",
    fecha_adquisicion: "",
    fecha_instalacion: "",
    garantia: 0,
  },
  datosUbicacion: {
    sede: "",
    servicio: "",
    ubicacion: "",
    localizacion: "",
  },
  accesorios: [],
  protocolo: {
    nombreProtocolo: "",
    acciones: [],
  },
};

const FORM_VALIDATION = Yup.object().shape({});
const FormularioRegistroFormik = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container className="mt-3">
      <Formik
        initialValues={{
          ...INITIAL_FORM_STATE,
        }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <Box sx={{ width: "75%", margin: "0 auto" }}>
            <Grid container spacing={3} sx={{ width: "100%" }}>
              <Grid item xs={12} md={6}>
                <TextField name="nombre" label="Equipo" />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField name="marca" label="Marca" />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField name="modelo" label="Modelo" />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField name="serie" label="Serie" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField name="inventario" label="Inventario" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField name="invima" label="Registro Invima" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField name="imagen" label="Imagen" />
              </Grid>
              <Grid item xs={12} md={6}>
                <Select
                  name="riesgo"
                  label="Riesgo"
                  options={["I", "IIA", "IIB", "III"]}
                ></Select>
              </Grid>
              <Grid item xs={12} md={6}>
                <Select
                  name="clas_biomedica"
                  label="Clasificación Biomédica"
                  options={[
                    "DIAGNÓSTICO",
                    "PREVENCIÓN",
                    "LABORATORIO",
                    "ESTERILIZACIÓN",
                    "TRATAMIENTO_Y_MANTENIMIENTO_DE_LA_VIDA",
                  ]}
                ></Select>
              </Grid>
              <Grid item xs={12} md={6}>
                <Select
                  name="tecnologia"
                  label="Tecnología"
                  options={[
                    "ELÉCTRICO",
                    "ELECTRÓNICO",
                    "NEUMÁTICO",
                    "ELECTROMECÁNICO",
                    "MECÁNICO",
                  ]}
                ></Select>
              </Grid>
              <Grid item xs={12} md={6}>
                <Select
                  name="periocidad"
                  label="Frecuencia de Mantenimiento"
                  options={[
                    "MENSUAL",
                    "TRIMESTRAL",
                    "CUATRIMESTRAL",
                    "SEMESTRAL",
                    "ANUAL",
                  ]}
                ></Select>
              </Grid>
            </Grid>
          </Box>
          <Button
            type="submit"
            variant="contained"
            endIcon={<SendIcon />}
            sx={{ marginTop: "30px" }}
          >
            Send
          </Button>
        </Form>
      </Formik>
    </Container>
  );
};

export default FormularioRegistroFormik;
