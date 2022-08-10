import { SUPPORTER_ERROR, SUPPORTER_SUCCESS, SUPPORTER_REQUEST } from "./type";
import axios from "axios";

export const supporterAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: SUPPORTER_REQUEST });
    const { data } = await axios.get(`/api/petition/supporters/${id}`);
    dispatch({ type: SUPPORTER_SUCCESS, payload: data.data , name:data.name});
  } catch (error) {
    dispatch({ type: SUPPORTER_ERROR, error: error.message });
  }
};
