import {
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_ERROR,
} from "./types";

const initialState = {};

const editProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_PROFILE_REQUEST:
      return { loading: true};
    case EDIT_PROFILE_SUCCESS:
      return { loading: false, status:true , userInfo: action.payload };
    case EDIT_PROFILE_ERROR:
      return { loading: false, error: action.payload };
    default:
      return { state };
  }
};
export default editProfileReducer