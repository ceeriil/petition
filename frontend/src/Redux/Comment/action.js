import {
  COMMENT_REQUESTS,
  COMMENT_ADDED,
  COMMENT_ERROR,
  REMOVED_COMMENTS,
  REMOVE_ERRORS,
} from "./type";
import {
  DETAILS_ERROR,
  DETAILS_REQUEST,
  DETAILS_SUCCESS,
} from "../Single/type";
import axios from "axios";
import config from "../../Config/header";

export const commentAction = (credentials) => async (dispatch) => {
  try {
    dispatch({ type: COMMENT_REQUESTS });
    dispatch({ type: DETAILS_REQUEST });
    const { data } = await axios.post(
      "/api/petition/comment",
      credentials,
      config
    );
    if (data.error)
      return dispatch({ type: COMMENT_ERROR, payload: data.message });
    dispatch({ type: COMMENT_ADDED, payload: data.message });
    dispatch({ type: DETAILS_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: COMMENT_ERROR, payload: error.message });
  }
};
export const removeComment = (id) => async (dispatch) => {
  try {
    dispatch({ type: COMMENT_REQUESTS });

    const { data } = await axios.post(
      "/api/petition/removeComment",
      { id: id },
      config
    );

    if (data.status) {
      dispatch({
        type: REMOVED_COMMENTS,
        payload: "Comment removed successfully",
      });
      dispatch({ type: DETAILS_SUCCESS, payload: data.data });
    } else {
      dispatch({ type: REMOVE_ERRORS, payload: data.error });
    }
  } catch (error) {
    dispatch({ type: COMMENT_ERROR, payload: error.message });
  }
};
