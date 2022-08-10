import {
  EDIT_PETITION_REQUEST,
  EDIT_PETITION_SUCCESS,
  EDIT_PETITION_ERROR,
} from "./type";

const initialState = {};

const editPetitionReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_PETITION_REQUEST:
      return { loading: true };
    case EDIT_PETITION_SUCCESS:
      return { loading: false, status: action.status };
    case EDIT_PETITION_ERROR:
      return { loading: false, error: action.message };

    default:
      return state;
  }
};
export default editPetitionReducer;
