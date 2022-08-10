import { DECLARE_REQUEST, DECLARE_SUCCESS, DECLARE_ERROR } from "./type";
import { DETAILS_SUCCESS } from "../Single/type";
import axios from "axios";
import config from "../../Config/header";

export const declareAction = (petitionId) => async (dispatch) => {
  try {
    dispatch({ type: DECLARE_REQUEST });
    const { data } = await axios.patch(
      "/api/petition/declare/",
      { id: petitionId },
      config
    );

    if (data.status) {
      dispatch({ type: DECLARE_SUCCESS, redirect: data.status });
      dispatch({type:DETAILS_SUCCESS,  payload : data.data });
    }
  } catch (error) {
    dispatch({ type: DECLARE_ERROR, payload: error.message });
  }
};
