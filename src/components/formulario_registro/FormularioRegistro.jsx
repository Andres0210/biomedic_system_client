import React, { useState } from "react";
import estilos from "../formulario_registro/formularioStyles.module.css";

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

  const estiloLegend = {
    fontWeight: "500",
    color: "#777",
    fontSize: "20px",
    fontFamily: "Oswald, sans-serif",
    fontStyle: "italic",
  };

  return (
    <div>
      <form class="mt-5" className={estilos.container}>
        <fieldset
          class="border p-4 mb-5 rounded"
          className={estilos.generalContainer}
        >
          <legend
            class="float-none w-auto p-2 text-sm-start"
            style={estiloLegend}
          >
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
        <fieldset
          class="border p-4 mb-5 rounded"
          className={estilos.generalContainer}
        >
          <legend
            class="float-none w-auto p-2 text-sm-start"
            style={estiloLegend}
          >
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
        <fieldset class="border p-4 mb-5 rounded">
          <legend
            class="float-none w-auto p-2 text-sm-start"
            style={estiloLegend}
          >
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
        <fieldset class="border p-4 mb-5 rounded">
          <legend
            class="float-none w-auto p-2 text-sm-start"
            style={estiloLegend}
          >
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
          <div    data-toggle="Eliminar Accesorio"
                    data-placement="left"
                    title="Agregar nuevo accesorio">
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
      </form>
    </div>
  );
};

export default FormularioRegistro;
