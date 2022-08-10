import {
  USER_PROFILE_LOADING,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_ERROR,
} from "./type";
import axios from "axios";
import config from "../../Config/header";

const userProfileAction = (userId) => async (dispatch) => {
  try {
    dispatch({ type: USER_PROFILE_LOADING });
    const { data } = await axios.get("/api/user/" + userId, config);
    dispatch({ type: USER_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_PROFILE_ERROR, payload: error.message });
  }
};

export default userProfileAction;
