import { DELETE_DETAIL, GET_DEVICE_DETAIL, GET_EQUIPOS } from "../actions/actions";

const initialState = {
  listaEquipos: [],
  deviceDetail: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EQUIPOS:
      return {
        ...state,
        listaEquipos: action.payload,
      };
    case GET_DEVICE_DETAIL:
      return {
        ...state,
        deviceDetail: action.payload,
      };
      case DELETE_DETAIL:
        return {
          ...state,
          deviceDetail: {}
        }
    default:
      return { ...state };
  }
};

export default rootReducer;
