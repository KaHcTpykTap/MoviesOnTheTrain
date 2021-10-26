import {applyMiddleware, createStore} from "redux";
import {userReducer} from "../reducers/userReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";


export const store = createStore(userReducer, composeWithDevTools(applyMiddleware(thunk)));