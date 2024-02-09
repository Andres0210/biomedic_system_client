import React from "react";
import estilos from "../formulario_registro/formularioStyles.module.css";

const Accesorios = ({estiloLegend, datosRegistro, handleAccesorioChange,handleRemoveAccesorio, handleAddAccesorio}) => {
  return (
    <fieldset class="border p-4 mb-5 rounded">
      <legend class="float-none w-auto p-2 text-sm-start" style={estiloLegend}>
        Accesorios{" "}
      </legend>
      <div className={estilos.accesorios}>
        {datosRegistro.accesorios.map((accesorio, index) => {
          return (
            <div
              class="input-group mb-3 input-group-sm "
              className={estilos.accesoriosMap}
              key={index}
            >
              <label class="input-group-text"> Accesorio y Cantidad:</label>
              <input
                class="form-control"
                type="text"
                id="accesorio"
                name="accesorio"
                value={accesorio.accesorio}
                onChange={(e) => {
                  handleAccesorioChange(index, e);
                }}
                className={estilos.accesorio}
                placeholder="Ingrese el accesorio"
              />

              <input
                class="form-control"
                type="number"
                id="cantidad"
                name="cantidad"
                value={accesorio.cantidad}
                onChange={(e) => {
                  handleAccesorioChange(index, e);
                }}
                className={estilos.cantidad}
              />
              <button
                class="btn btn-outline-secondary "
                data-toggle="Eliminar Accesorio"
                data-placement="left"
                title="Eliminar Accesorio"
                className={estilos.deleteAccesorio}
                type="button"
                onClick={() => handleRemoveAccesorio(index)}
              >
                <div class="input-group-addon">
                  <i class="bi bi-trash"></i>
                </div>
              </button>
            </div>
          );
        })}
      </div>
      <div
        data-toggle="Agregar nuevo accesorio"
        data-placement="left"
        title="Agregar nuevo accesorio"
      >
        <i
          style={{
            fontSize: "2rem",
            color: "cornflowerblue",
            cursor: "pointer",
          }}
          class="bi bi-plus-circle"
          onClick={handleAddAccesorio}
        ></i>
      </div>
    </fieldset>
  );
};

export default Accesorios;
