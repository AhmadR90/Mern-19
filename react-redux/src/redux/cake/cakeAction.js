import { BUY_CAKE ,REFUND_CAKE} from "./cakeTypes"

 const buyCake=()=>{
    return {
        type:BUY_CAKE
    }
    
    }
    const refundCake=()=>{
        return{
            type:REFUND_CAKE
        }
}
export {buyCake,refundCake}