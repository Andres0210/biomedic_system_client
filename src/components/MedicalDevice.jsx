import axios from "axios";
import React, { useEffect, useState } from "react";

// MedicalDevice es el componente que se va a ver en la lista de todos los equipos

const MedicalDevice = () => {
  const [equipos, setEquipos] = useState([]);
  useEffect(() => {
    const getDevices = async () => {
      const response = await axios("http://localhost:8080/devices");
      setEquipos(response.data);
    };
    getDevices();
  }, []);
  return (
    <div class="container mt-5">
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
                <tr key={i}>
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
