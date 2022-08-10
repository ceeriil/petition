import {
  PETITION_CREATE_REQUEST,
  PETITION_CREATE_SUCCESS,
  PETITION_CREATE_ERROR,
} from "./types";
import axios from "axios";

const petitionCreateReducer = (credentials) => async (dispatch, getState) => {
  try {
    dispatch({ type: PETITION_CREATE_REQUEST });

    const token = localStorage.getItem("token");

    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.post("/api/petition/create",credentials,config);
    if(data.error) return dispatch({type:PETITION_CREATE_ERROR , payload: data.error})
    if (data.status) {
      dispatch({ type: PETITION_CREATE_SUCCESS, payload: data.status });
    }
  } catch (error) {
    dispatch({ type: PETITION_CREATE_ERROR, payload: error.message });
  }
};

export default petitionCreateReducer;
