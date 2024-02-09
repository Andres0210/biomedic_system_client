import React from "react";
import estilos from "../formulario_registro/formularioStyles.module.css";

const DatosTecnicos = ({
  estiloLegend,
  datosRegistro,
  handleInputChangeDatosTecnicos,
}) => {
  return (
    <fieldset
      class="border p-4 mb-5 rounded"
      className={estilos.generalContainer}
    >
      <legend class="float-none w-auto p-2 text-sm-start" style={estiloLegend}>
        Datos Técnicos
      </legend>
      <div className={estilos.tecnicos}>
        <div class="input-group mb-3 input-group-sm">
          <label class="input-group-text" htmlFor="voltaje">
            Voltaje{" "}
          </label>
          <input
            class="form-control"
            type="number"
            id="voltaje"
            name="voltaje"
            value={datosRegistro.datosTecnicos.voltaje}
            onChange={(e) => {
              handleInputChangeDatosTecnicos(e);
            }}
          />
        </div>

        <div class="input-group mb-3 input-group-sm">
          <label class="input-group-text" htmlFor="corriente">
            Corriente{" "}
          </label>
          <input
            class="form-control"
            type="number"
            id="corriente"
            name="corriente"
            value={datosRegistro.datosTecnicos.corriente}
            onChange={(e) => {
              handleInputChangeDatosTecnicos(e);
            }}
          />
        </div>
        <div class="input-group mb-3 input-group-sm">
          <label class="input-group-text" htmlFor="frecuencia">
            Frecuencia{" "}
          </label>
          <input
            class="form-control"
            type="number"
            id="frecuencia"
            name="frecuencia"
            value={datosRegistro.datosTecnicos.frecuencia}
            onChange={(e) => {
              handleInputChangeDatosTecnicos(e);
            }}
          />
        </div>
        <div class="input-group mb-3 input-group-sm">
          <label class="input-group-text" htmlFor="potencia">
            Potencia{" "}
          </label>
          <input
            class="form-control"
            type="number"
            id="potencia"
            name="potencia"
            value={datosRegistro.datosTecnicos.potencia}
            onChange={(e) => {
              handleInputChangeDatosTecnicos(e);
            }}
          />
        </div>
        <div class="input-group mb-3 input-group-sm">
          <label class="input-group-text" htmlFor="temperatura">
            Temperatura{" "}
          </label>
          <input
            class="form-control"
            type="number"
            id="temperatura"
            name="temperatura"
            value={datosRegistro.datosTecnicos.temperatura}
            onChange={(e) => {
              handleInputChangeDatosTecnicos(e);
            }}
          />
        </div>
        <div class="input-group mb-3 input-group-sm">
          <label class="input-group-text" htmlFor="humedad">
            Humedad{" "}
          </label>
          <input
            class="form-control"
            type="number"
            id="humedad"
            name="humedad"
            value={datosRegistro.datosTecnicos.humedad}
            onChange={(e) => {
              handleInputChangeDatosTecnicos(e);
            }}
          />
        </div>
        <div class="input-group mb-3 input-group-sm">
          <label class="input-group-text" htmlFor="peso">
            Peso{" "}
          </label>
          <input
            class="form-control"
            type="number"
            id="peso"
            name="peso"
            value={datosRegistro.datosTecnicos.peso}
            onChange={(e) => {
              handleInputChangeDatosTecnicos(e);
            }}
          />
        </div>
        <div class="input-group mb-3 input-group-sm">
          <label class="input-group-text" htmlFor="bateria">
            Batería{" "}
          </label>
          <input
            class="form-control"
            type="number"
            id="bateria"
            name="bateria"
            value={datosRegistro.datosTecnicos.bateria}
            onChange={(e) => {
              handleInputChangeDatosTecnicos(e);
            }}
          />
        </div>
      </div>
    </fieldset>
  );
};

export default DatosTecnicos;
