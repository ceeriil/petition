import { CATEGORY_REQUEST, CATEGORY_SUCCESS, CATEGORY_ERROR } from "./type";

const initialState = {};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_REQUEST:
      return { loading: true };
    case CATEGORY_SUCCESS:
      return { loading: false, data: action.payload };
    case CATEGORY_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export default categoryReducer;
