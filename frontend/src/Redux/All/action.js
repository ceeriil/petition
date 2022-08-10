import { PETITION_ALL, PETITION_ERROR, PETITION_REQUESTED } from "./type";

import axios from "axios";

export const petitionByDate = () => async (dispatch) => {
  try {
    dispatch({ type: PETITION_REQUESTED });
    const { data } = await axios.get("/api/petition/getByDate");
    dispatch({ type: PETITION_ALL, payload: data });
  } catch (error) {
    dispatch({ type: PETITION_ERROR, payload: error.message });
  }
};
