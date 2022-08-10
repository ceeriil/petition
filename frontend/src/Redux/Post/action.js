import {
  PETITION_STARTED_ERROR,
  PETITION_STARTED_STARTED,
  PETITION_STARTED_REQUESTED,
} from "./type";
import config from "../../Config/header";
import axios from "axios";

export const petitionStarted = () => async (dispatch) => {
  try {
    dispatch({ type: PETITION_STARTED_REQUESTED });
    const { data } = await axios.get("/api/petition/getByUser", config);
    dispatch({ type: PETITION_STARTED_STARTED, payload: data });
  } catch (error) {
    dispatch({ type: PETITION_STARTED_ERROR, payload: error.message });
  }
};
