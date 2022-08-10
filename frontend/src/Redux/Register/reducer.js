import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_ERROR } from "./type";

const initialState = {};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { loading: true };

    case REGISTER_SUCCESS:
      return { loading: false, status: action.payload };
    case REGISTER_ERROR:
      return { loading: false, error: action.payload };
    default:
     return state;
  }
};
export default registerReducer;
