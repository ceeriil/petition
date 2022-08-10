import {  applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'
import RootReducer from "./rootReducer";


const user = localStorage.getItem("user_cred") ? JSON.parse(localStorage.getItem("user_cred")) : {};

const initialState = {
    login:{userInfo:user}
};

const middleware = [thunk];

const store = createStore(
    RootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store