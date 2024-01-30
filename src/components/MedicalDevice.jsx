import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMedicalDevices } from "../redux/actions/actions";
import { useNavigate } from "react-router-dom";

// MedicalDevice es el componente que se va a ver en la lista de todos los equipos

const MedicalDevice = () => {
  const equipos = useSelector((state) => state.listaEquipos);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goToDetail = (id)=>{
    navigate(`/device/${id}`)
  }

  const goToRegister = ()=>{
    navigate("/registroEquipo")
  }

  useEffect(() => {
    const getDevices = async () => {
      dispatch(getAllMedicalDevices());
    };
    getDevices();
  }, []);
  return (
    <div class="container mt-5">
    <button onClick={goToRegister} class="btn btn-primary mb-4">Registrar Equipo</button>
      <div class="container">
        <table class="table table-hover table-striped table-bordered table-sm">
          <thead class="table-dark">
            <tr>
              <th scope="col">Equipo</th>
              <th scope="col">Marca</th>
              <th scope="col">Modelo</th>
              <th scope="col">Serie</th>
              <th scope="col">Activo</th>
              <th scope="col">Registro invima</th>
              <th scope="col">Clas. Riesgo</th>
              <th scope="col">Sede</th>
              <th scope="col">Servicio</th>
              <th scope="col">Ubicación</th>
              <th scope="col">Localicación</th>
            </tr>
          </thead>
          <tbody>
            {equipos?.map((equipo, i) => {
              return (
                <tr key={i} onClick={()=>{goToDetail(equipo.id)}} style={{cursor: "pointer"}}>
                  <th scope="row">{equipo.nombre}</th>
                  <td>{equipo.marca}</td>
                  <td>{equipo.modelo}</td>
                  <td>{equipo.serie}</td>
                  <td>{equipo.inventario}</td>
                  <td>{equipo.invima}</td>
                  <td>{equipo.riesgo}</td>
                  <td>{equipo.datosUbicacion.sede}</td>
                  <td>{equipo.datosUbicacion.servicio}</td>
                  <td>{equipo.datosUbicacion.ubicacion}</td>
                  <td>{equipo.datosUbicacion.localizacion}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MedicalDevice;
