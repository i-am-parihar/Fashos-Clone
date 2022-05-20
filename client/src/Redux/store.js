import { applyMiddleware, combineReducers, createStore } from "redux";
import { cartReducer } from "./CartData/reducer";
import { dataReducer } from "./Data/reducer";
import { loginReducer } from "./Login/reducer";
import { regReducer } from "./Registration/reducer";
import { composeWithDevTools } from "redux-devtools-extension"; 
import thunk from "redux-thunk" ;



export const rootReducer = combineReducers({
    registration : regReducer,
    login : loginReducer,
    mainData : dataReducer,
    cart : cartReducer,
})

export const store = createStore(rootReducer , composeWithDevTools( applyMiddleware(thunk) ) ) ;