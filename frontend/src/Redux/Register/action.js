import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_ERROR } from "./type";
import axios from "axios";
export const registerAction = (credentials) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST });
    const { data } = await axios.post("/api/user/register", credentials);
    console.log(data);
    if (data.error)
      return dispatch({ type: REGISTER_ERROR, payload: data.error });
    dispatch({ type: REGISTER_SUCCESS, payload: data.created });
  } catch (error) {
    dispatch({ type: REGISTER_ERROR, payload: error.message });
  }
};
