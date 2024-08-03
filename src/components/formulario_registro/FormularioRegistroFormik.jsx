import React from "react";
import { FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import { Box, Container, Fab, Grid, Tooltip, Typography } from "@mui/material";
import TextField from "./FormsUI/TextField";
import Select from "./FormsUI/Select";
import DateTimePicker from "./FormsUI/DataTimePicker";
import DatosUbicacionFormik from "./DatosUbicacionFormik";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import { Add } from "@mui/icons-material";
import Button from "./FormsUI/Button/ButtonWrapper";
import axios from "axios";


const INITIAL_FORM_STATE = {
  nombre: "",
  marca: "",
  modelo: "",
  serie: "",
  inventario: "",
  imagen: "",
  invima: "",
  calibracion: "",
  riesgo: "",
  clas_biomedica: "",
  tecnologia: "",
  periocidad: "",
  datosTecnicos: {
    voltaje: undefined,
    corriente: undefined,
    frecuencia: undefined,
    potencia: undefined,
    temperatura: undefined,
    humedad: undefined,
    peso: undefined,
    bateria: undefined,
  },
  datosAdquisicion: {
    forma_adquisicion: "",
    fecha_adquisicion: "",
    fecha_instalacion: "",
    garantia: undefined,
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

const FORM_VALIDATION = Yup.object().shape({
  nombre: Yup.string().required("Debe ingresar el nombre del equipo"),
  marca: Yup.string(),
  modelo: Yup.string(),
  serie: Yup.string(),
  inventario: Yup.string(),
  imagen: Yup.string().required("Porfavor, seleccione una imagen"),
  invima: Yup.string(),
  riesgo: Yup.string().required("Seleccione el tipo de riesgo de riesgo"),
  clas_biomedica: Yup.string().required(
    "Seleccione la clasificación biomédica"
  ),
  tecnologia: Yup.string().required(
    "Seleccione la tecnología predominante del equipo"
  ),
  periocidad: Yup.string().required(
    "Seleccione la frecuencia de mantenimiento preventivo"
  ),
  calibracion: Yup.bool().required(
    "Indique si el equipo requiere calibración o no requiere"
  ),
  datosTecnicos: Yup.object().shape({
    voltaje: Yup.number().positive("Voltaje debe ser un nuemro mayor a cero"),
    corriente: Yup.number().positive(
      "Corriente debe ser un nuemro mayor a cero"
    ),
    frecuencia: Yup.number().positive(
      "Frecuencia debe ser un nuemro mayor a cero"
    ),
    potencia: Yup.number().positive("Potenia debe ser un nuemro mayor a cero"),
    temperatura: Yup.number().positive(
      "Temperatura debe ser un nuemro mayor a cero"
    ),
    humedad: Yup.number().positive("Humedad debe ser un nuemro mayor a cero"),
    peso: Yup.number().positive("Peso debe ser un nuemro mayor a cero"),
    bateria: Yup.number().positive("Batería debe ser un nuemro mayor a cero"),
  }),
  datosAdquisicion: Yup.object().shape({
    forma_adquisicion: Yup.string().required(
      "Seleccione una forma de adquisición"
    ),
    fecha_adquisicion: Yup.date(),
    fecha_instalacion: Yup.date(),
    garantia: Yup.number().positive("Garantía debe ser un nuemro mayor a cero"),
  }),
  datosUbicacion: Yup.object().shape({
    sede: Yup.string().required("Seleccione una sede"),
    servicio: Yup.string().required("Seleccione un servicio"),
    ubicacion: Yup.string().required("Seleccione una ubicación específica"),
    localizacion: Yup.string().required(
      "Seleccione una localización específica"
    ),
  }),
  accesorios: Yup.array().of(
    Yup.object().shape({
      accesorio: Yup.string().required("Debe ingresar el nombre del accesorio"),
      cantidad: Yup.number()
        .min(1, "La cantidad debe ser igual o mayor a 1")
        .required("Debe ingresar una cantidad"),
    })
  ),
});

const estiloLegend = {
  fontWeight: "500",
  color: "#777",
  fontSize: "20px",
  fontFamily: "Oswald, sans-serif",
  fontStyle: "italic",
  margin: "20px",
};

const FormularioRegistroFormik =  () => {
  const registroDevice = async (datos)=>{
  await axios.post('http://localhost:8080/devices', datos)

  }
  return (
    <Container className="mt-5 pb-5">
      <Formik
        initialValues={{
          ...INITIAL_FORM_STATE,
        }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values) => {
          registroDevice(values);
        }}
      >
        {({ values }) => (
          <Form>
            <Box sx={{ width: "75%", margin: "10px auto" }}>
              <div style={{ margin: "10px 0 10px 0" }}>
                <Typography
                  class="float-none w-auto p-2 text-sm-start"
                  style={estiloLegend}
                >
                  Datos Generales
                </Typography>
                <Grid container spacing={3} sx={{ width: "100%" }}>
                  <Grid item xs={12} md={4}>
                    <TextField name="nombre" label="Equipo" />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <TextField name="marca" label="Marca" />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <TextField name="modelo" label="Modelo" />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <TextField name="serie" label="Serie" />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField name="inventario" label="Inventario" />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField name="invima" label="Registro Invima" />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField name="imagen" label="Imagen" />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Select
                      name="riesgo"
                      label="Riesgo"
                      options={["I", "IIA", "IIB", "III"]}
                    ></Select>
                  </Grid>
                  <Grid item xs={12} md={4}>
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
                  <Grid item xs={12} md={4}>
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
                  <Grid item xs={12} md={4}>
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
                  <Grid item xs={12} md={4}>
                    <Select
                      name="calibracion"
                      label="Requiere Calibración"
                      options={[true, false]}
                    ></Select>
                  </Grid>
                </Grid>
              </div>
              <div style={{ margin: "10px 0 10px 0" }}>
                <Typography
                  class="float-none w-auto p-2 text-sm-start"
                  style={estiloLegend}
                >
                  Datos Técnicos
                </Typography>
                <Grid container spacing={3} sx={{ width: "100%" }}>
                  <Grid item xs={12} md={3}>
                    <TextField
                      type="number"
                      name="datosTecnicos.voltaje"
                      label="Voltaje"
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField
                      type="number"
                      name="datosTecnicos.corriente"
                      label="Corriente"
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField
                      type="number"
                      name="datosTecnicos.frecuencia"
                      label="Frecuencia"
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField
                      type="number"
                      name="datosTecnicos.potencia"
                      label="Potencia"
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField
                      type="number"
                      name="datosTecnicos.temperatura"
                      label="Temperatura"
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField
                      type="number"
                      name="datosTecnicos.humedad"
                      label="Humedad"
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField
                      type="number"
                      name="datosTecnicos.peso"
                      label="Peso"
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField
                      type="number"
                      name="datosTecnicos.bateria"
                      label="Batería"
                    />
                  </Grid>
                </Grid>
              </div>
              <div style={{ margin: "10px 0 10px 0" }}>
                <Typography
                  class="float-none w-auto p-2 text-sm-start"
                  style={estiloLegend}
                >
                  Datos de Adquisición
                </Typography>
                <Grid container spacing={3} sx={{ width: "100%" }}>
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
                  <Grid item xs={12} md={6}>
                    <DateTimePicker
                      name="datosAdquisicion.fecha_instalacion"
                      label="Fecha de Instalación"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      type="number"
                      name="datosAdquisicion.garantia"
                      label="Garantía"
                    />
                  </Grid>
                </Grid>
              </div>
              <DatosUbicacionFormik estiloLegend={estiloLegend} />
              <div style={{ margin: "10px 0 10px 0" }}>
                <Typography
                  class="float-none w-auto p-2 text-sm-start"
                  style={estiloLegend}
                >
                  Accesorios
                </Typography>
                <FieldArray
                  name="accesorios"
                  render={({ push, remove }) => (
                    <div>
                      {values.accesorios.map((accesorio, index) => (
                        <Grid
                          container
                          spacing={1}
                          alignItems="center"
                          justifyContent="center"
                          sx={{
                            width: "100%",
                            marginBottom: "15px",
                          }}
                        >
                          <Grid item xs={8}>
                            <TextField
                              name={`accesorios.${index}.accesorio`}
                              label="Nombre del Accesorio"
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={3}>
                            <TextField
                              name={`accesorios.${index}.cantidad`}
                              label="Cantidad"
                              type="number"
                              fullWidth
                            />
                          </Grid>
                          <Grid item>
                            <Tooltip title="Borrar accesorio">
                              <DeleteTwoToneIcon
                                color="primary"
                                fontSize="large"
                                onClick={() => remove(index)}
                                sx={{ cursor: "pointer" }}
                              />
                            </Tooltip>
                          </Grid>
                        </Grid>
                      ))}
                      <Tooltip title="Agregar nuevo accesorio">
                        <Fab
                          color="primary"
                          aria-label="add"
                          onClick={() =>
                            push({ accesorio: "", cantidad: undefined })
                          }
                        >
                          <Add fontSize="large" />
                        </Fab>
                      </Tooltip>
                    </div>
                  )}
                />
              </div>

              {/* Protocolos */}

              <div style={{ margin: "10px 0 10px 0" }}>
                <Typography
                  class="float-none w-auto p-2 text-sm-start"
                  style={estiloLegend}
                >
                  Protocolos
                </Typography>
                <Grid
                  container
                  sx={{
                    width: "100%",
                    marginBottom: "15px",
                  }}
                >
                  <Grid item xs={12}>
                    <TextField
                      name="protocolo.nombreProtocolo"
                      label="Nombre Protocolo"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FieldArray
                      name="protocolo.acciones"
                      render={({ push, remove }) => (
                        <div>
                          {values.protocolo.acciones.map((accion, index) => (
                            <Grid
                              container
                              spacing={1}
                              alignItems="center"
                              justifyContent="center"
                              sx={{
                                width: "100%",
                                marginBottom: "15px",
                              }}
                            >
                              <Grid item xs={11}>
                                <TextField
                                  name={`protocolo.acciones.${index}.accion`}
                                  label="Accion o protocolo"
                                  fullWidth
                                />
                              </Grid>

                              <Grid item>
                                <Tooltip title="Borrar protocolo">
                                  <DeleteTwoToneIcon
                                    color="primary"
                                    fontSize="large"
                                    onClick={() => remove(index)}
                                    sx={{ cursor: "pointer" }}
                                  />
                                </Tooltip>
                              </Grid>
                            </Grid>
                          ))}
                          <Tooltip title="Agregar acción o protocolo">
                            <Fab
                              color="primary"
                              aria-label="add"
                              onClick={() => push({ accion: "" })}
                            >
                              <Add fontSize="large" />
                            </Fab>
                          </Tooltip>
                        </div>
                      )}
                    />
                  </Grid>
                </Grid>
              </div>
            </Box>
            <Button
              
            >
              Registrar Equipo
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default FormularioRegistroFormik;
