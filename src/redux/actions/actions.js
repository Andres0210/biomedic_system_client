import axios from "axios";

export const GET_EQUIPOS = "GET_EQUIPOS";
export const GET_DEVICE_DETAIL = "GET_DEVICE_DETAIL";
export const DELETE_DETAIL = "DELETE_DETAIL";


// Lista de equipos medicos

export const getAllMedicalDevices = () => {
  return async function (dispatch) {
    try {
        const response = await axios("http://localhost:8080/devices");
        return dispatch({
            type: GET_EQUIPOS,
            payload: response.data.content
        })
    } catch (error) {}
  };
};

// Detalle de equipo

export const getMedicalDeviceDetail = (id) => {
    return async function(dispatch){
        try {
            const response = await axios(`http://localhost:8080/devices/${id}`);
            return dispatch({
                type: GET_DEVICE_DETAIL,
                payload: response.data
            })
        } catch (error) {
            
        }
    }
}

export const borrarDetalle = () => {
    return {
        type: DELETE_DETAIL
    }
}