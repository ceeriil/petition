import {
  PETITION_SIGNED_SIGNED,
  PETITION_SIGNED_ERROR,
  PETITION_SIGNED_REQUESTED,
} from "./type";
import axios from "axios";
import config from "../../Config/header";

export const petitionSigned = () => async (dispatch) => {
    try {
      dispatch({ type: PETITION_SIGNED_REQUESTED });
      const { data } = await axios.get("/api/petition/getSigned", config);
      dispatch({ type: PETITION_SIGNED_SIGNED, payload: data });
    } catch (error) {
      dispatch({ type: PETITION_SIGNED_ERROR, payload: error.message });
    }
  };
  