import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMedicalDeviceDetail } from "../redux/actions/actions";
import { useParams } from "react-router-dom";
import estilos from "./home.module.css"

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
    return () => {};
  }, []);

  return (
    <div className={estilos.contenedor}>
    <div className={estilos.infoGeneralContainer}>
      <h4 className={estilos.seccionTitle}>Informacion General</h4>
      <div>
        <div className={estilos.imgInfoGeneral}>
          <img alt="" src={equipo.imagen}></img>

          <div className={estilos.infoGeneral}>
            <h3 className={estilos.equipo}>{equipo.nombre}</h3>
            <p className={estilos.marca}>
              <span>Marca:</span> {equipo.marca}
            </p>
            <p className={estilos.modelo}>
              <span>Modelo:</span> {equipo.modelo}
            </p>
            <p className={estilos.serie}>
              <span>Serie:</span> {equipo.serie}
            </p>
            <p className={estilos.inventario}>
              <span>Inventario:</span> {equipo.inventario}
            </p>
            <p className={estilos.invima}>
              <span>Registro Invima:</span> {equipo.invima}
            </p>
            <p className={estilos.sede}>
              <span>Sede:</span> {equipo.datosUbicacion.sede}
            </p>
            <p className={estilos.servicio}>
              <span>Servicio:</span> {equipo.datosUbicacion.servicio}
            </p>
            <p className={estilos.ubicacion}>
              <span>Ubicacion:</span> {equipo.datosUbicacion.ubicacion}
            </p>
            <p className={estilos.localizacion}>
              <span>Localizacion:</span>{" "}
              {equipo.datosUbicacion.localizacion}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h4 className={estilos.seccionTitle}>Registro histórico</h4>
      <span>
        Forma de Adquisición:{" "}
        {equipo.datosAdquisicion.forma_adquisicion}
      </span>
      <span>
        Fecha de Adquisicion:{" "}
        {equipo.datosAdquisicion.fecha_adquisicion}
      </span>
      <span>
        Fecha de Instalación:{" "}
        {equipo.datosAdquisicion.fecha_instalacion}
      </span>
      <span>
        Duracion de Garantía: {equipo.datosAdquisicion.garantia} meses{" "}
      </span>
      <span>
        Vencimiento de garantía:{" "}
        {equipo.datosAdquisicion.vencimiento_garantia}
      </span>
      <span>
        Estado de garantía:{" "}
        {equipo.datosAdquisicion.estado_garantia ? (
          <span>Vigente</span>
        ) : (
          <span>Caducada</span>
        )}
      </span>
    </div>
    <div>
      <h4 className={estilos.seccionTitle}>
        Registro Técnico de Instalación
      </h4>
      <span>Voltaje: {equipo.datosTecnicos.voltaje}V AC</span>
      <span>Corriente: {equipo.datosTecnicos.corriente}A</span>
      <span>Potencia: {equipo.datosTecnicos.potencia}W</span>
      <span>Temperatura: {equipo.datosTecnicos.temperatura}°C</span>
      <span>Humedad: {equipo.datosTecnicos.humedad}%</span>
      <span>Peso: {equipo.datosTecnicos.peso}Kg</span>
      <span>Bateria: {equipo.datosTecnicos.bateria}V</span>
    </div>
    <div>
      <h4 className={estilos.seccionTitle}>
        Registro de apoyo Técnico
      </h4>
      <span>Tecnologia dominante: {equipo.tecnologia}</span>
      <span>Clasificacion Biomédica: {equipo.clas_biomedica}</span>
      <span>Clasificación de riesgo: {equipo.riesgo}</span>
    </div>
    <div>
      <h4 className={estilos.seccionTitle}>Mantenimiento Preventivo</h4>
      <span>
        Requiere Calibracion:{" "}
        {equipo.calibracion ? <span>Si</span> : <span>No</span>}
      </span>
      <span>
        Periocidad de Mantenimiento Preventivo: {equipo.periocidad}
      </span>
    </div>
  </div>
  );
};

export default DeviceDetail;
