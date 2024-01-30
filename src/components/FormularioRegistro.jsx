import React, { useState } from "react";

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
    accesorios: [{ accesorio: "", cantidad: 0 }],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDatosRegistro({
      ...datosRegistro,
      [name]: value,
    });
  };

  const handleAccesorioChange = (index, event) => {
    const { name, value } = event.target;
    const newAccesorios = [...datosRegistro.accesorios];
    newAccesorios[index][name] = value;

    setDatosRegistro({
      ...datosRegistro,
      accesorios: newAccesorios,
    });
  };

  const handleAddAccesorio = () => {
    setDatosRegistro({
      ...datosRegistro,
      accesorios: [...datosRegistro.accesorios, { accesorio: "", cantidad: 0 }],
    });
  };

  const handleRemoveAccesorio = (index) => {
    const newAccesorios = [...datosRegistro.accesorios];
    newAccesorios.splice(index, 1);

    setDatosRegistro({
      ...datosRegistro,
      accesorios: newAccesorios,
    });
  };

  // Manejar cambios en el select
  const handleSelectChange = (e) => {
    const { value } = e.target;
    setDatosRegistro({
      ...datosRegistro,
      calibracion: value === "true",
    });
  };

  return (
    <div>
      <form class="mt-5" style={{ width: "600px" }}>
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
              datosRegistro.estado !== null
                ? datosRegistro.calibracion?.toString()
                : ""
            }
            onChange={handleSelectChange}
            class="form-select"
          >
            <option selected disabled>
              Elija una opción
            </option>
            <option value={true}>SI</option>
            <option value={false}>NO</option>
          </select>
        </div>
        <div class="input-group mb-3 input-group-sm">
          <label class="input-group-text" htmlFor="riesgo">
            Clasificacion de Riesgo{" "}
          </label>
          <input
            class="form-control"
            type="text"
            id="riesgo"
            name="riesgo"
            value={datosRegistro.riesgo}
            placeholder="Ingrese riesgo de equipo"
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
        </div>
        <div class="input-group mb-3 input-group-sm">
          <label class="input-group-text" htmlFor="clas_biomedica">
            Clasificacion Biomédica{" "}
          </label>
          <input
            class="form-control"
            type="text"
            id="clas_biomedica"
            name="clas_biomedica"
            value={datosRegistro.clas_biomedica}
            placeholder="Clasificacion biomédica"
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
        </div>
        <div class="input-group mb-3 input-group-sm">
          <label class="input-group-text" htmlFor="tecnologia">
            Tecnología Predominante{" "}
          </label>
          <input
            class="form-control"
            type="text"
            id="tecnologia"
            name="tecnologia"
            value={datosRegistro.tecnologia}
            placeholder="Tecnologia predominante"
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
        </div>
        <div class="input-group mb-3 input-group-sm">
          <label class="input-group-text" htmlFor="periocidad">
            Periocidad de Mantenimietno{" "}
          </label>
          <input
            class="form-control"
            type="text"
            id="periocidad"
            name="periocidad"
            value={datosRegistro.periocidad}
            placeholder="Ingrese periocidad de equipo"
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
        </div>
        <div>
          <label>Accesorios: </label>
          {datosRegistro.accesorios.map((accesorio, index) => {
            return (
              <div class="input-group mb-3 input-group-sm" key={index}>
                <span class="input-group-text"> Accesorio y Cantidad:</span>
                <input
                  class="form-control"
                  type="text"
                  id="accesorio"
                  name="accesorio"
                  value={accesorio.accesorio}
                  onChange={(e) => {
                    handleAccesorioChange(index, e);
                  }}
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
                />

                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  onClick={() => handleRemoveAccesorio(index)}
                >
                  Eliminar
                </button>
              </div>
            );
          })}
          <button class="btn btn-outline-secondary" type="button" onClick={handleAddAccesorio}>
            Agregar Accesorio
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioRegistro;
