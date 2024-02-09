import axios from "axios";
import React, { useEffect, useState } from "react";
import estilos from "../formulario_registro/formularioStyles.module.css";

const DatosUbicacion = ({
  estiloLegend,
  datosRegistro,
  handleSelectChange4,
}) => {
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
    <fieldset class="border p-4 mb-5 rounded">
      <legend class="float-none w-auto p-2 text-sm-start" style={estiloLegend}>
        Ubicación
      </legend>
      <span className={estilos.subtitulo}>Seleccione una ubicación</span>
      <div class="input-group" className={estilos.ubicacion}>
        <div class="input-group input-group-sm">
          <label class="input-group-text" htmlFor="sede">
            Sede
          </label>
          <select
            onChange={handleSelectChange4}
            id="sede"
            name="sede"
            class="form-select"
          >
            <option value="">Seleccione una opción</option>
            {sedesUnique?.map((opcion, index) => {
              return (
                <option key={index} value={opcion}>
                  {opcion}
                </option>
              );
            })}
          </select>
        </div>
        <div class="input-group input-group-sm">
          <label class="input-group-text" htmlFor="servicio">
            Servicio
          </label>
          <select
            onChange={handleSelectChange4}
            id="servicio"
            name="servicio"
            class="form-select"
          >
            <option value="">Seleccione una opción</option>
            {serviciosUnique?.map((servicio, index) => {
              return (
                <option key={index} value={servicio}>
                  {servicio}
                </option>
              );
            })}
          </select>
        </div>
        <div class="input-group input-group-sm">
          <label class="input-group-text" htmlFor="ubicacion">
            Ubicación
          </label>
          <select
            onChange={handleSelectChange4}
            id="ubicacion"
            name="ubicacion"
            class="form-select"
          >
            <option value="">Seleccione una opción</option>
            {ubicacionesUnique?.map((ubicacion, index) => {
              return (
                <option key={index} value={ubicacion}>
                  {ubicacion}
                </option>
              );
            })}
          </select>
        </div>
        <div class="input-group input-group-sm">
          <label class="input-group-text" htmlFor="localizacion">
            Localización
          </label>
          <select
            onChange={handleSelectChange4}
            id="localizacion"
            name="localizacion"
            class="form-select"
          >
            <option value="">Seleccione una opción</option>
            {localizacionesUnique?.map((localizacion, index) => {
              return (
                <option key={index} value={localizacion}>
                  {localizacion}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </fieldset>
  );
};

export default DatosUbicacion;
