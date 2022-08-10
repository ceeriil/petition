import { DECLARE_REQUEST, DECLARE_SUCCESS, DECLARE_ERROR } from "./type";

const initialState = {};

const declareReducer = (state = initialState, action) => {
  switch (action.type) {
    case DECLARE_REQUEST:
      return { loading: true };
    case DECLARE_SUCCESS:
      return { loading: false , redirect: action.redirect };
    case DECLARE_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default declareReducer;
