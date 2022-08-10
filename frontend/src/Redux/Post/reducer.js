import {
  PETITION_STARTED_ERROR,
  PETITION_STARTED_STARTED,
  PETITION_STARTED_REQUESTED,
} from "./type";

const initialState = {};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case PETITION_STARTED_REQUESTED:
      return { loading: true };
    case PETITION_STARTED_STARTED:
      return { loading: false, data: action.payload };
    case PETITION_STARTED_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default postReducer;
