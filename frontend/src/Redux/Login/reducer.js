import { LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_ERROR , LOGOUT} from "./type";

const initialState = {};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { loading: true };

    case LOGIN_SUCCESS:
      return { loading: false, status:action.status , userInfo:action.payload };

    case LOGIN_ERROR:
      return { loading: false, error: action.payload };
     case LOGOUT:
       return {}
    default:
      return state;
  }
};

export default loginReducer;
