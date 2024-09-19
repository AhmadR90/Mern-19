import {BUY_ICE_CREAM,REFUND_ICE_CREAM} from "./iceCreamTypes"

const initialValue={
    vanillaIceCreams:50
}


const iceCreamReducer=(store=initialValue,action)=>{
    if(action.type===BUY_ICE_CREAM){
    return{
        ...store,
        vanillaIceCreams:store.vanillaIceCreams-1
    }
}else if(action.type===REFUND_ICE_CREAM){
    return{
        ...store,
        vanillaIceCreams:store.vanillaIceCreams+1
    }
}else{
    return store
}
}
export default iceCreamReducer