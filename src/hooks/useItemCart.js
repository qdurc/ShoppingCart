import { useEffect, useReducer } from "react";
import { itemsReducer } from "../reducer/itemsReducer";
import { AddProduct, DeleteProduct, UpdateQuantityProductCart } from "../reducer/itemsAction";

const inittialCartItem = JSON.parse(sessionStorage.getItem('cart')) || [];

export const useItemCart = () => {

    const [CartItem, dispatch] = useReducer(itemsReducer, inittialCartItem);

    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(CartItem));
    }, [CartItem]);
  
    const handlerAppProductCart = (product) => {

        const hasItem = CartItem.find((i) => i.product.id === product.id)
        if(hasItem){
            dispatch(
                {
                    type: UpdateQuantityProductCart,
                    payload: product,
                }
            )
        }
        else{
            dispatch(
                {
                    type: AddProduct,
                    payload: product,
                }
            )
        }
    }

    const handlerDeleteProductCart = (id) => {
        dispatch(
            {
                type: DeleteProduct,
                payload: id,
            }
        )
    }

    return{
        CartItem,
        handlerAppProductCart,
        handlerDeleteProductCart
    }
}