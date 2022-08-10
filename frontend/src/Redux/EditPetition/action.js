import {
  EDIT_PETITION_REQUEST,
  EDIT_PETITION_SUCCESS,
  EDIT_PETITION_ERROR,
} from "./type";
import { DETAILS_SUCCESS } from "../Single/type";
import config from "../../Config/header";
import axios from "axios";

export const editPetitionAction = (credentials) => async (dispatch) => {
  try {
    dispatch({ type: EDIT_PETITION_REQUEST });
    const { data } = await axios.patch(
      "/api/petition/edit",
      { credentials },
      config
    );
    if (data.status) {
      dispatch({ type: EDIT_PETITION_SUCCESS, status: data.status });
      dispatch({ type: DETAILS_SUCCESS, payload: data.data });
    }
  } catch (error) {
    dispatch({ type: EDIT_PETITION_ERROR, message: error.message });
  }
};
