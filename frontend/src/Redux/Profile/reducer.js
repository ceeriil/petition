import {
  USER_PROFILE_LOADING,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_ERROR,
} from "./type";

const initialState = {};

const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_PROFILE_LOADING:
      return { loading: true };

    case USER_PROFILE_SUCCESS:
      return { loading: false, profile: action.payload };
    case USER_PROFILE_ERROR:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
export default userProfileReducer;
