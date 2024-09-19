import { BUY_CAKE,REFUND_CAKE } from "./cakeTypes"

const initialState={
    vanillaCakes:10
}

const cakeReducer=(store=initialState,action)=>{
    if(action.type===BUY_CAKE){
        return{
        ...store,
        vanillaCakes:store.vanillaCakes-1
        }
    }else if(action.type===REFUND_CAKE){
        return{
            ...store,
            vanillaCakes:store.vanillaCakes+1
        }
    }
    else{
        return store
    }
}
export default cakeReducer;