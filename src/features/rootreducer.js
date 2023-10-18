import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import { userReducer } from "./userReducer";
import {findReducer} from "./findReducer";

const rootReducer = combineReducers({
    cart: cartReducer,
    user: userReducer,
    film: findReducer,
});

export { rootReducer };
