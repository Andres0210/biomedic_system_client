import React, { useEffect, useState } from "react";
import estilos from "../formulario_registro/formularioStyles.module.css";
import InfoGeneral from "./InfoGeneral";
import DatosTecnicos from "./DatosTecnicos";
import DatosAdquisicion from "./DatosAdquisicion";
import Accesorios from "./Accesorios";
import DatosUbicacion from "./DatosUbicacion";
import axios from "axios";
import Protocolos from "./Protocolos";
import FormularioRegistroFormik from "./FormularioRegistroFormik";


const FormularioRegistro = () => {


  const [datosRegistro, setDatosRegistro] = useState({
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
  });

  //

  // Funcion para manejar los inputs

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDatosRegistro({
      ...datosRegistro,
      [name]: value,
    });
  };

  const handleInputChangeDatosTecnicos = (event) => {
    const { name, value } = event.target;
    setDatosRegistro({
      ...datosRegistro,
      datosTecnicos: {
        ...datosRegistro.datosTecnicos,
        [name]: value,
      },
    });
  };

  const handleInputChangeDatosAdquisicion = (event) => {
    const { name, value } = event.target;
    setDatosRegistro({
      ...datosRegistro,
      datosAdquisicion: {
        ...datosRegistro.datosAdquisicion,
        [name]: value,
      },
    });
  };

  // Funciones para manejar los inputs de accesorios

  const handleAccesorioChange = (index, event) => {
    const { name, value } = event.target;
    const newAccesorios = [...datosRegistro.accesorios];
    newAccesorios[index][name] = value;

    setDatosRegistro({
      ...datosRegistro,
      accesorios: newAccesorios,
    });
  };

  // Agregar nuevo accesorio

  const handleAddAccesorio = () => {
    setDatosRegistro({
      ...datosRegistro,
      accesorios: [...datosRegistro.accesorios, { accesorio: "", cantidad: 0 }],
    });
  };

  // Eliminar un accesorio

  const handleRemoveAccesorio = (index) => {
    const newAccesorios = [...datosRegistro.accesorios];
    newAccesorios.splice(index, 1);

    setDatosRegistro({
      ...datosRegistro,
      accesorios: newAccesorios,
    });
  };

  /* Manejar cambios en el select de Requiere calibración*/

  const handleSelectChange = (e) => {
    const { value } = e.target;
    setDatosRegistro({
      ...datosRegistro,
      calibracion: value === "true",
    });
  };
  const handleSelectChange2 = (e) => {
    const { name, value } = e.target;
    setDatosRegistro({
      ...datosRegistro,
      [name]: value,
    });
  };
  //Manejador del select de forma de adquisicion
  const handleSelectChange3 = (e) => {
    const { name, value } = e.target;
    setDatosRegistro({
      ...datosRegistro,
      datosAdquisicion: {
        ...datosRegistro.datosAdquisicion,
        [name]: value,
      },
    });
  };

  const handleSelectChange4 = (e) => {
    const { name, value } = e.target;
    setDatosRegistro({
      ...datosRegistro,
      datosUbicacion: {
        ...datosRegistro.datosUbicacion,
        [name]: value,
      },
    });
  };

  const handleNombreProtocolo = (e) => {
    setDatosRegistro({
      ...datosRegistro,
      protocolo: {
        ...datosRegistro.protocolo,
        nombreProtocolo: e.target.value,
      },
    });
  };

  const handleAccionProtocoloChange = (index, e) => {
    const nuevasAcciones = [...datosRegistro.protocolo.acciones];
    nuevasAcciones[index] = { accion: e.target.value };
    setDatosRegistro({
      ...datosRegistro,
      protocolo: { ...datosRegistro.protocolo, acciones: nuevasAcciones },
    });
  };

  // Función para agregar una nueva acción al protocolo
  const agregarAccionProtocolo = (e) => {
    e.preventDefault();
    setDatosRegistro({
      ...datosRegistro,
      protocolo: {
        ...datosRegistro.protocolo,
        acciones: [...datosRegistro.protocolo.acciones, { accion: "" }],
      },
    });
  };

  const handleRemoveAccion = (index) => {
    const newAccion = [...datosRegistro.protocolo.acciones];
    newAccion.splice(index, 1);

    setDatosRegistro({
      ...datosRegistro,
      protocolo: { ...datosRegistro.protocolo, acciones: newAccion },
    });
  };

  const estiloLegend = {
    fontWeight: "500",
    color: "#777",
    fontSize: "20px",
    fontFamily: "Oswald, sans-serif",
    fontStyle: "italic",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/devices", datosRegistro);
    console.log("datos de registro: ", datosRegistro);
  };

  return (
    <div>
      <form class="mt-5" className={estilos.container}>
        {/* Componente que muestra la informacion general */}
        <InfoGeneral
          estiloLegend={estiloLegend}
          datosRegistro={datosRegistro}
          handleInputChange={handleInputChange}
          handleSelectChange={handleSelectChange}
          handleSelectChange2={handleSelectChange2}
        />

        {/* Componente que muestra los datos técnicos */}
        <DatosTecnicos
          estiloLegend={estiloLegend}
          datosRegistro={datosRegistro}
          handleInputChangeDatosTecnicos={handleInputChangeDatosTecnicos}
        />

        {/* Componente que muestra los datos de Adquisicion */}
        <DatosAdquisicion
          estiloLegend={estiloLegend}
          handleSelectChange3={handleSelectChange3}
          handleInputChangeDatosAdquisicion={handleInputChangeDatosAdquisicion}
          datosRegistro={datosRegistro}
        />

        {/* Componente que muestra los Accesorios */}
        <Accesorios
          estiloLegend={estiloLegend}
          datosRegistro={datosRegistro}
          handleAccesorioChange={handleAccesorioChange}
          handleRemoveAccesorio={handleRemoveAccesorio}
          handleAddAccesorio={handleAddAccesorio}
        />
        {/*Componente para mostrar datos de ubicacion del equipo */}
        <DatosUbicacion
          estiloLegend={estiloLegend}
          datosRegistro={datosRegistro}
          handleSelectChange4={handleSelectChange4}
        />
        <Protocolos
          estiloLegend={estiloLegend}
          datosRegistro={datosRegistro}
          handleNombreProtocolo={handleNombreProtocolo}
          handleAccionProtocoloChange={handleAccionProtocoloChange}
          agregarAccionProtocolo={agregarAccionProtocolo}
          handleRemoveAccion={handleRemoveAccion}
        ></Protocolos>
        <button onClick={handleSubmit}>Registrar equipo</button>
      </form>
      <FormularioRegistroFormik/>
    </div>
  );
};

export default FormularioRegistro;
