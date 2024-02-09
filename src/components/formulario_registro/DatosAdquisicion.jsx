import React from "react";
import estilos from "../formulario_registro/formularioStyles.module.css";

const DatosAdquisicion = ({
  estiloLegend,
  handleSelectChange3,
  handleInputChangeDatosAdquisicion,
  datosRegistro,
}) => {
  return (
    <fieldset class="border p-4 mb-5 rounded">
      <legend class="float-none w-auto p-2 text-sm-start" style={estiloLegend}>
        Datos de Adquisición
      </legend>
      <div className={estilos.adquisicion}>
        <div class="input-group mb-3 input-group-sm">
          <label class="input-group-text" htmlFor="forma_adquisicion">
            Forma de Adquisición{" "}
          </label>
          <select
            id="forma_adquisicion"
            name="forma_adquisicion"
            onChange={handleSelectChange3}
            class="form-select"
          >
            <option disabled selected>
              Elija una opción
            </option>
            <option value="COMPRA">Compra</option>
            <option value="DONACION">Donación</option>
            <option value="PRESTAMO">Préstamo</option>
            <option value="COMODATO">Comodato</option>
            <option value="ALQUILER">Alquiler</option>
          </select>
        </div>
        <div class="input-group mb-3 input-group-sm">
          <label class="input-group-text" htmlFor="fecha_adquisicion">
            Fecha de Adquisición{" "}
          </label>
          <input
            class="form-control"
            type="date"
            id="fecha_adquisicion"
            name="fecha_adquisicion"
            value={datosRegistro.datosAdquisicion.fecha_adquisicion}
            onChange={(e) => {
              handleInputChangeDatosAdquisicion(e);
            }}
          />
        </div>
        <div class="input-group mb-3 input-group-sm">
          <label class="input-group-text" htmlFor="fecha_instalacion">
            Fecha de Instalación{" "}
          </label>
          <input
            class="form-control"
            type="date"
            id="fecha_instalacion"
            name="fecha_instalacion"
            value={datosRegistro.datosAdquisicion.fecha_instalacion}
            onChange={(e) => {
              handleInputChangeDatosAdquisicion(e);
            }}
          />
        </div>
        <div class="input-group mb-3 input-group-sm">
          <label class="input-group-text" htmlFor="garantia">
            Tiempo de garantía (Meses){" "}
          </label>
          <input
            class="form-control"
            type="number"
            id="garantia"
            name="garantia"
            value={datosRegistro.datosAdquisicion.garantia}
            onChange={(e) => {
              handleInputChangeDatosAdquisicion(e);
            }}
          />
        </div>
      </div>
    </fieldset>
  );
};

export default DatosAdquisicion;
