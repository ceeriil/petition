import { DETAILS_ERROR, DETAILS_REQUEST, DETAILS_SUCCESS } from "./type";

const initialState = {};

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAILS_REQUEST:
      return { loading: true };
    case DETAILS_SUCCESS:
      return { loading: false, data: action.payload };
    case DETAILS_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default detailsReducer;
