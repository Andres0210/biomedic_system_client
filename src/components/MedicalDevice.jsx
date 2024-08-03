import React, { useEffect } from "react";
import {  useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";

// MedicalDevice es el componente que se va a ver en la lista de todos los equipos

const MedicalDevice = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const equipos = useSelector((state) => state.listaEquipos);
  const navigate = useNavigate();
  const goToDetail = (id) => {
    navigate(`/device/${id}`);
  };

  useEffect(() => {}, []);

  const columnasEquipo = [
    "Equipo",
    "Marca",
    "Modelo",
    "Serie",
    "Activo",
    "Registro Invima",
    "Tipo de Riesgo",
    "Sede",
    "Servicio",
    "Ubicación",
    "Localización",
  ];
  return (
    <div class="mt-2">
      <div class="">
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 640 }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  {columnasEquipo.map((col, i) => {
                    return (
                      <TableCell
                        align="left"
                        style={{
                          minWidth: 170,
                          backgroundColor: "#0066FF",
                          color: "white",
                        }}
                        key={i}
                      >
                        {col}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {equipos
                  ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((equipo, index) => {
                    return (
                      <TableRow
                        onClick={() => {
                          goToDetail(equipo.id);
                        }}
                        style={{ cursor: "pointer" }}
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={index}
                      >
                        <TableCell align="left">{equipo.nombre}</TableCell>
                        <TableCell align="left">{equipo.marca}</TableCell>
                        <TableCell align="left">{equipo.modelo}</TableCell>
                        <TableCell align="left">{equipo.serie}</TableCell>
                        <TableCell align="left">{equipo.inventario}</TableCell>
                        <TableCell align="left">{equipo.invima}</TableCell>
                        <TableCell align="left">{equipo.riesgo}</TableCell>
                        <TableCell align="left">
                          {equipo.datosUbicacion.sede}
                        </TableCell>
                        <TableCell align="left">
                          {equipo.datosUbicacion.servicio}
                        </TableCell>
                        <TableCell align="left">
                          {equipo.datosUbicacion.ubicacion}
                        </TableCell>
                        <TableCell align="left">
                          {equipo.datosUbicacion.localizacion}
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 100]}
            component="div"
            count={equipos.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage="Equipos por página"
            className=""
          />
        </Paper>
      </div>
    </div>
  );
};

export default MedicalDevice;
