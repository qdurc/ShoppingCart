import { AddProduct, DeleteProduct, UpdateQuantityProductCart } from "./itemsAction";

export const itemsReducer = (state = [], action) => {

    switch (action.type) {
        case AddProduct:
            return [
                ...state, 
                {
                    product: action.payload, 
                    quantity: 1,
                }
            ];
            
        case UpdateQuantityProductCart:
            return state.map((i) => {
                if (i.product.id === action.payload.id){
                    return {
                        ...i,
                        quantity: i.quantity + 1
                    }
                }
                return i;
            });
            
        case DeleteProduct:
            return state.filter((i) => i.product.id !== action.payload);
    
        default:
            return state;
    }
}
