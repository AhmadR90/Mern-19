import {createStore} from "redux"
import cakeReducer from "./cake/cakeReducer"

const Cakestore=createStore(cakeReducer)

export default Cakestore