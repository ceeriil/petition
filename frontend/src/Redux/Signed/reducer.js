import {
    PETITION_SIGNED_SIGNED,
    PETITION_SIGNED_ERROR,
    PETITION_SIGNED_REQUESTED,
  } from "./type";
  
  const initialState = {};
  
  const postReducer = (state = initialState, action) => {
    switch (action.type) {
      case PETITION_SIGNED_REQUESTED:
        return { loading: true };
      case PETITION_SIGNED_SIGNED:
        return { loading: false, data: action.payload };
      case PETITION_SIGNED_ERROR:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default postReducer;
  