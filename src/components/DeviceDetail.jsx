import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  borrarDetalle,
  getMedicalDeviceDetail,
} from "../redux/actions/actions";
import { useParams } from "react-router-dom";
import estilos from "./home.module.css";

const DeviceDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const equipo = useSelector((state) => state.deviceDetail);

  useEffect(() => {
    const getDevice = async (id) => {
      dispatch(getMedicalDeviceDetail(id));
    };
    getDevice(id);
    console.log("hola");
    return () => {
      dispatch(borrarDetalle());
    };
  }, []);

  return (
    <div>
      {equipo && (
        <div className={estilos.contenedor}>
          <div className={estilos.registroContainer}>
            <h4 className={estilos.seccionTitle}>Informacion General</h4>
            <div>
              <div className={estilos.imgInfoGeneral}>
                <div className={estilos.contenedorImagen}>
                  <img
                    lassName={estilos.imagen}
                    alt=""
                    src={equipo.imagen}
                  ></img>
                </div>
                <div className={estilos.infoGeneral}>
                  <div className={estilos.equipo}>
                    <h3>{equipo.nombre}</h3>
                  </div>
                  <div className={estilos.marca}>
                    <p>
                      <span>Marca:</span> {equipo.marca}
                    </p>
                  </div>
                  <div className={estilos.modelo}>
                    <p>
                      <span>Modelo:</span> {equipo.modelo}
                    </p>
                  </div>
                  <div className={estilos.serie}>
                    <p>
                      <span>Serie:</span> {equipo.serie}
                    </p>
                  </div>
                  <div className={estilos.inventario}>
                    <p>
                      <span>Inventario:</span> {equipo.inventario}
                    </p>
                  </div>
                  <div className={estilos.invima}>
                    <p>
                      <span>Registro Invima:</span> {equipo.invima}
                    </p>
                  </div>
                  <div className={estilos.sede}>
                    <p>
                      <span>Sede:</span> {equipo.datosUbicacion?.sede}
                    </p>
                  </div>
                  <div className={estilos.servicio}>
                    <p>
                      <span>Servicio:</span> {equipo.datosUbicacion?.servicio}
                    </p>
                  </div>
                  <div className={estilos.ubicacion}>
                    <p>
                      <span>Ubicacion:</span> {equipo.datosUbicacion?.ubicacion}
                    </p>
                  </div>
                  <div className={estilos.localizacion}>
                    <p>
                      <span>Localizacion:</span>{" "}
                      {equipo.datosUbicacion?.localizacion}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={estilos.registroContainer}>
            <h4 className={estilos.seccionTitle}>Registro histórico</h4>
            <div className={estilos.datosAdquisicion}>
              <div className={estilos.forma}>
                <p>
                  <span>Forma de Adquisición:</span>{" "}
                  {equipo.datosAdquisicion?.forma_adquisicion}
                </p>
              </div>
              <div className={estilos.fechaAdquisicion}>
                <p>
                  <span>Fecha de Adquisicion:</span>{" "}
                  {equipo.datosAdquisicion?.fecha_adquisicion}
                </p>
              </div>
              <div className={estilos.fechaInstalacion}>
                <p>
                  <span>Fecha de Instalación:</span>{" "}
                  {equipo.datosAdquisicion?.fecha_instalacion}
                </p>
              </div>
              <div className={estilos.duracionGarantia}>
                <p>
                  <span>Duracion de Garantía:</span>{" "}
                  {equipo.datosAdquisicion?.garantia} meses{" "}
                </p>
              </div>
              <div className={estilos.vencGarantia}>
                <p>
                  <span>Vencimiento de garantía:</span>{" "}
                  {equipo.datosAdquisicion?.vencimiento_garantia}
                </p>
              </div>
              <div className={estilos.estadoGarantia}>
                <p>
                  <span>Estado de garantía:</span>{" "}
                  {equipo.datosAdquisicion?.estado_garantia ? (
                    <span id={estilos.vigente}>Vigente</span>
                  ) : (
                    <span>Caducada</span>
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className={estilos.registroContainer}>
            <h4 className={estilos.seccionTitle}>
              Registro Técnico de Instalación
            </h4>
            <div className={estilos.datosTecnicos}>
              <div className={estilos.voltaje}>
                <p>
                  <span>Voltaje:</span> {equipo.datosTecnicos?.voltaje}V AC
                </p>
              </div>
              <div className={estilos.corriente}>
                <p>
                  <span>Corriente:</span> {equipo.datosTecnicos?.corriente}A
                </p>
              </div>
              <div className={estilos.potencia}>
                <p>
                  <span>Potencia:</span> {equipo.datosTecnicos?.potencia}W
                </p>
              </div>
              <div className={estilos.temperatura}>
                <p>
                  <span>Temperatura:</span> {equipo.datosTecnicos?.temperatura}
                  °C
                </p>
              </div>
              <div className={estilos.humedad}>
                <p>
                  <span>Humedad:</span> {equipo.datosTecnicos?.humedad}%
                </p>
              </div>
              <div className={estilos.peso}>
                <p>
                  <span>Peso:</span> {equipo.datosTecnicos?.peso}Kg
                </p>
              </div>
              <div className={estilos.bateria}>
                <p>
                  <span>Bateria:</span> {equipo.datosTecnicos?.bateria}V
                </p>
              </div>
            </div>
          </div>
          <div className={estilos.registroContainer}>
            <h4 className={estilos.seccionTitle}>Registro de apoyo Técnico</h4>
            <div className={estilos.apoyoTecnico}>
              <div className={estilos.tecnologia}>
                <p>
                  <span>Tecnologia dominante:</span> {equipo.tecnologia}
                </p>
              </div>
              <div className={estilos.clasificacion}>
                <p>
                  <span>Clasificacion Biomédica:</span> {equipo.clas_biomedica}
                </p>
              </div>
              <div className={estilos.riesgo}>
                <p>
                  <span>Clasificación de riesgo:</span> {equipo.riesgo}
                </p>
              </div>
            </div>
          </div>
          <div className={estilos.registroContainer}>
            <h4 className={estilos.seccionTitle}>Mantenimiento Preventivo</h4>
            <div className={estilos.datosMantenimiento}>
              <div className={estilos.calibracion}>
                <p>
                  <span>Requiere Calibracion:</span>{" "}
                  {equipo.calibracion ? "Si" : "No"}
                </p>
              </div>
              <div className={estilos.periocidad}>
                <p>
                  <span>Periocidad de Mantenimiento Preventivo:</span>{" "}
                  {equipo.periocidad}
                </p>
              </div>
            </div>
          </div>
          <div className={estilos.registroContainer}>
            <h4 className={estilos.seccionTitle}>Accesorios</h4>
            <div className={estilos.datosAccesorios}>
              <table className={estilos.tablaAccesorios}>
                <thead>
                  <tr>
                    <th>Accesorio</th>
                    <th>Cantidad</th>
                  </tr>
                </thead>
                <tbody>
                  {equipo.accesorios?.map((accesorio, i) => {
                    return (
                      <tr key={i}>
                        <td className={estilos.accesorio}>
                          {accesorio.accesorio}
                        </td>
                        <td className={estilos.accesorio}>
                          {accesorio.cantidad}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeviceDetail;
