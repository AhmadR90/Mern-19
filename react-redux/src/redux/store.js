import {createStore,combineReducers} from "redux"
import cakeReducer from "./cake/cakeReducer"
import iceCreamReducer from "./iceCream/iceCreamReducer"
const rootReducers=combineReducers({
   cake:cakeReducer,
   iceCream:iceCreamReducer
})
const Cakestore=createStore(rootReducers)

export default Cakestore