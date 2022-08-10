import {
  PETITION_CREATE_REQUEST,
  PETITION_CREATE_SUCCESS,
  PETITION_CREATE_ERROR,
} from "./types";

const initialState = {};

const petitionCreateAction = (state = initialState, action) => {
  switch (action.type) {
    case PETITION_CREATE_REQUEST:
      return { loading: true };
    case PETITION_CREATE_SUCCESS:
      return { loading: false, status: action.payload };
    case PETITION_CREATE_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export default petitionCreateAction