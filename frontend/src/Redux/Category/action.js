import { CATEGORY_REQUEST, CATEGORY_SUCCESS, CATEGORY_ERROR } from "./type";
import axios from "axios";

export const categoryAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_REQUEST });
    const { data } = await axios.get(`/api/petition/category/${id}/`);
    if(data.message) return dispatch({type:CATEGORY_ERROR , payload:data.message})
    dispatch({ type: CATEGORY_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: CATEGORY_ERROR, payload: error.message });
  }
};

export default categoryAction;
