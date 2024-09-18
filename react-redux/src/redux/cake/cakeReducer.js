import { BUY_CAKE,REFUND_CAKE } from "./cakeTypes"

const initialState={
    totalCakes:10
}

const cakeReducer=(store=initialState,action)=>{
    if(action.type===BUY_CAKE){
        return{
        ...store,
        totalCakes:store.totalCakes-1
        }
    }else if(action.type===REFUND_CAKE){
        return{
            ...store,
            totalCakes:store.totalCakes+1
        }
    }
}
export default cakeReducer;