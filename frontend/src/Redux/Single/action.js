import {
  DETAILS_ERROR,
  DETAILS_REQUEST,
  DETAILS_SUCCESS,
} from "./type";
import axios from "axios";

export const petitionById = (id) => async (dispatch) => {
  try {
    dispatch({ type: DETAILS_REQUEST });
    const { data } = await axios.get(`/api/petition/${id}`);
    dispatch({ type: DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: DETAILS_ERROR, payload: error.message });
  }
};


