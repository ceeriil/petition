import {
  PETITION_POPULAR,
  PETITION_RECENT,
  PETITION_VICTORY,
  PETITION_ERROR,
  PETITION_FEATURED,
  PETITION_REQUESTED,
} from "./type";

import axios from 'axios';

export const petitionFeatured = () => async (dispatch) => {
    try {
      dispatch({ type: PETITION_REQUESTED });
      const { data } = await axios.get("/api/petition/featured");
      dispatch({ type: PETITION_FEATURED, payload: data });
    } catch (error) {
      dispatch({ type: PETITION_ERROR, payload: error.message });
    }
  };
  
  export const petitionPopular = () => async (dispatch) => {
    try {
      dispatch({ type: PETITION_REQUESTED });
      const { data } = await axios.get("/api/petition/popular");
      dispatch({ type: PETITION_POPULAR, payload: data });
    } catch (error) {
      dispatch({ type: PETITION_ERROR, payload: error.message });
    }
  };
  
  export const petitionRecent = () => async (dispatch) => {
    try {
      dispatch({ type: PETITION_REQUESTED });
      const { data } = await axios.get("/api/petition/recent");
      dispatch({ type: PETITION_RECENT, payload: data });
    } catch (error) {
      dispatch({ type: PETITION_ERROR, payload: error.message });
    }
  };
  
  export const petitionVictory = () => async (dispatch) => {
    try {
      dispatch({ type: PETITION_REQUESTED });
      const { data } = await axios.get("/api/petition/victory");
      dispatch({ type: PETITION_VICTORY, payload: data });
    } catch (error) {
      dispatch({ type: PETITION_ERROR, payload: error.message });
    }
  };
  