import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Typography,
} from "@mui/material";
import TextField from "./FormsUI/TextField";
import SendIcon from "@mui/icons-material/Send";
import Select from "./FormsUI/Select";
import DateTimePicker from "./FormsUI/DataTimePicker";

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
  return (
    <Container className="mt-5">
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
              <Grid container xs={12}>
                <Typography>Datos Generales</Typography>
              </Grid>
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
              <Grid item xs={12} md={6}>
                <Select
                  name="calibracion"
                  label="Requiere Calibración"
                  options={[true, false]}
                ></Select>
              </Grid>
              <Grid container xs={12}>
                <Typography>Datos Técnicos</Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField name="datosTecnicos.voltaje" label="Voltaje" />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField name="datosTecnicos.corriente" label="Corriente" />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField name="datosTecnicos.frecuencia" label="Frecuencia" />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField name="datosTecnicos.potencia" label="Potencia" />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField name="datosTecnicos.temperatura" label="Temperatura" />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField name="datosTecnicos.humedad" label="Humedad" />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField name="datosTecnicos.peso" label="Peso" />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField name="datosTecnicos.bateria" label="Batería" />
              </Grid>
              <Grid container xs={12}>
                <Typography>Datos de Adquisición</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Select
                  name="datosAdquisicion.forma_adquisicion"
                  label="Forma de Adquisición"
                  options={[
                    "COMPRA",
                    "DONACION",
                    "PRESTAMO",
                    "COMODATO",
                    "ALQUILER",
                  ]}
                ></Select>
              </Grid>
              <Grid item xs={12} md={6}>
                <DateTimePicker
                  name="datosAdquisicion.fecha_adquisicion"
                  label="Fecha de Adquisición"
                />
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
