import { SUPPORTER_ERROR, SUPPORTER_SUCCESS, SUPPORTER_REQUEST } from "./type";

const initialState = {};

const supporterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUPPORTER_REQUEST:
      return { loading: true };
    case SUPPORTER_SUCCESS:
      return { loading: false, data: action.payload , name: action.name};
    case SUPPORTER_ERROR:
      return { loading: false, error: action.payload };
    default: return state;  
  }
};
export default supporterReducer;
