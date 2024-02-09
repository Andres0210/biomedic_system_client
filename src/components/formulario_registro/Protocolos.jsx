import React from "react";
import estilos from "../formulario_registro/formularioStyles.module.css";

const Protocolos = ({
  estiloLegend,
  datosRegistro,
  handleNombreProtocolo,
  handleAccionProtocoloChange,
  agregarAccionProtocolo,
  handleRemoveAccion,
}) => {
  return (
    <fieldset class="border p-4 mb-5 rounded">
      <legend class="float-none w-auto p-2 text-sm-start" style={estiloLegend}>
        Protocolos{" "}
      </legend>
      <div className={estilos.accesorios}>
        <div class="input-group input-group-sm mb-3">
          <label class="input-group-text">Nombre de protocolo</label>
          <input
            class="form-control"
            type="text"
            id="nombreProtocolo"
            name="nombreProtocolo"
            value={datosRegistro?.protocolo?.nombreProtocolo}
            onChange={handleNombreProtocolo}
          ></input>
        </div>
        <div></div>

        <div class="input-group" className={estilos.accesorios}>
          <span className={estilos.subtitulo}>Protocolos de mantenimiento</span>
          {datosRegistro?.protocolo.acciones.map((accion, index) => {
            return (
              <div
                class="input-group mb-3 input-group-sm "
                className={estilos.accesoriosMap}
                key={index}
              >
                <label class="input-group-text">Acción</label>
                <input
                  class="form-control"
                  type="text"
                  id="accion"
                  name="accion"
                  value={accion.accion} // Acceder a la propiedad accion dentro del objeto accion
                  onChange={(e) => handleAccionProtocoloChange(index, e)}
                />
                <button
                  class="btn btn-outline-secondary "
                  data-toggle="Eliminar Accion"
                  data-placement="left"
                  title="Eliminar Acción"
                  className={estilos.deleteAccesorio}
                  type="button"
                  onClick={() => handleRemoveAccion(index)}
                >
                  <div class="input-group-addon">
                    <i class="bi bi-trash"></i>
                  </div>
                </button>
              </div>
            );
          })}
          <div
            data-toggle="Agregar nueva accion"
            data-placement="left"
            title="Agregar nueva accion"
          >
            {" "}
            <i
              style={{
                fontSize: "2rem",
                color: "cornflowerblue",
                cursor: "pointer",
              }}
              class="bi bi-plus-circle"
              onClick={agregarAccionProtocolo}
            ></i>
          </div>
        </div>
      </div>
    </fieldset>
  );
};

export default Protocolos;
