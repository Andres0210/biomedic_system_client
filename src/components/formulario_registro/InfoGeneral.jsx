import React from "react";
import estilos from '../formulario_registro/formularioStyles.module.css'

const InfoGeneral = ({estiloLegend, datosRegistro, handleInputChange, handleSelectChange, handleSelectChange2}) => {
  return (
    <fieldset
      class="border p-4 mb-5 rounded"
      className={estilos.generalContainer}
    >
      <legend class="float-none w-auto p-2 text-sm-start" style={estiloLegend}>
        Información General
      </legend>
      <div className={estilos.general}>
        <div class="input-group mb-3 input-group-sm">
          <label class="input-group-text" htmlFor="nombre">
            Nombre Equipo{" "}
          </label>
          <input
            class="form-control"
            type="text"
            id="nombre"
            name="nombre"
            value={datosRegistro.nombre}
            placeholder="Ingrese nombre de equipo"
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
        </div>

        <div class="input-group mb-3 input-group-sm">
          <label class="input-group-text" htmlFor="marca">
            Marca{" "}
          </label>
          <input
            class="form-control"
            type="text"
            id="marca"
            name="marca"
            value={datosRegistro.marca}
            placeholder="Ingrese marca de equipo"
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
        </div>
        <div class="input-group mb-3 input-group-sm">
          <label class="input-group-text" htmlFor="modelo">
            Modelo{" "}
          </label>
          <input
            class="form-control"
            type="text"
            id="modelo"
            name="modelo"
            value={datosRegistro.modelo}
            placeholder="Ingrese modelo de equipo"
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
        </div>
        <div class="input-group mb-3 input-group-sm">
          <label class="input-group-text" htmlFor="serie">
            Serie{" "}
          </label>
          <input
            class="form-control"
            type="text"
            id="serie"
            name="serie"
            value={datosRegistro.serie}
            placeholder="Ingrese serie de equipo"
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
        </div>
        <div class="input-group mb-3 input-group-sm">
          <label class="input-group-text" htmlFor="inventario">
            Inventario{" "}
          </label>
          <input
            class="form-control"
            type="text"
            id="inventario"
            name="inventario"
            value={datosRegistro.inventario}
            placeholder="Ingrese inventario de equipo"
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
        </div>
        <div class="input-group mb-3 input-group-sm">
          <label class="input-group-text" htmlFor="imagen">
            Imagen{" "}
          </label>
          <input
            class="form-control"
            type="text"
            id="imagen"
            name="imagen"
            value={datosRegistro.imagen}
            placeholder="Ingrese imagen de equipo"
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
        </div>
        <div class="input-group mb-3 input-group-sm">
          <label class="input-group-text" htmlFor="invima">
            Registro Invima{" "}
          </label>
          <input
            class="form-control"
            type="text"
            id="invima"
            name="invima"
            value={datosRegistro.invima}
            placeholder="Ingrese invima de equipo"
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
        </div>
        <div class="input-group mb-3 input-group-sm">
          <label class="input-group-text" htmlFor="calibracion">
            Requiere Calibracion{" "}
          </label>
          <select
            id="calibracion"
            name="estado"
            value={
              datosRegistro.calibracion !== null
                ? datosRegistro.calibracion?.toString()
                : ""
            }
            onChange={handleSelectChange}
            class="form-select"
          >
            <option selected>Elija una opción</option>
            <option value={true}>SI</option>
            <option value={false}>NO</option>
          </select>
        </div>
        <div class="input-group mb-3 input-group-sm">
          <label class="input-group-text" htmlFor="riesgo">
            Clasificación de Riesgo{" "}
          </label>
          <select
            id="riesgo"
            name="riesgo"
            onChange={handleSelectChange2}
            class="form-select"
          >
            <option selected disabled>
              Elija una opción
            </option>
            <option value="I">I</option>
            <option value="IIA">IIA</option>
            <option value="IIB">IIB</option>
            <option value="III">III</option>
          </select>
        </div>

        <div class="input-group mb-3 input-group-sm">
          <label class="input-group-text" htmlFor="clas_biomedica">
            Clasificación Biomédica{" "}
          </label>
          <select
            id="clas_biomedica"
            name="clas_biomedica"
            onChange={handleSelectChange2}
            class="form-select"
          >
            <option selected disabled>
              Elija una opción
            </option>
            <option value="DIAGNÓSTICO">DIAGNÓSTICO</option>
            <option value="PREVENCIÓN">PREVENCIÓN</option>
            <option value="LABORATORIO">LABORATORIO</option>
            <option value="ESTERILIZACIÓN">ESTERILIZACIÓN</option>
            <option value="TRATAMIENTO_Y_MANTENIMIENTO_DE_LA_VIDA">
              TRATAMIENTO Y MANTENIMIENTO DE LA VIDA
            </option>
          </select>
        </div>
        <div class="input-group mb-3 input-group-sm">
          <label class="input-group-text" htmlFor="tecnologia">
            Tecnología predominante{" "}
          </label>
          <select
            id="tecnologia"
            name="tecnologia"
            onChange={handleSelectChange2}
            class="form-select"
          >
            <option selected disabled>
              Elija una opción
            </option>
            <option value="ELÉCTRICO">ELÉCTRICO</option>
            <option value="ELECTRÓNICO">ELECTRÓNICO</option>
            <option value="NEUMÁTICO">NEUMÁTICO</option>
            <option value="MECÁNICO">MECÁNICO</option>
            <option value="ELECTROMECÁNICO">ELECTROMECÁNICO</option>
          </select>
        </div>
        <div class="input-group mb-3 input-group-sm">
          <label class="input-group-text" htmlFor="periocidad">
            Periocidad de mantenimiento{" "}
          </label>
          <select
            id="periocidad"
            name="periocidad"
            onChange={handleSelectChange2}
            class="form-select"
          >
            <option disabled selected>
              Elija una opción
            </option>
            <option value="MENSUAL">MENSUAL</option>
            <option value="TRIMESTRAL">TRIMESTRAL</option>
            <option value="CUATRIMESTRAL">CUATRIMESTRAL</option>
            <option value="SEMESTRAL">SEMESTRAL</option>
            <option value="ANUAL">ANUAL</option>
          </select>
        </div>
      </div>
    </fieldset>
  );
};

export default InfoGeneral;
