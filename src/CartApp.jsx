import { useItemCart } from "./hooks/useItemCart.js";
import { Navbar } from "./components/NavBar";
import { CartRoutes } from "./routes/CartRoutes";

export const CartApp = () => {

    const {CartItem, handlerAppProductCart, handlerDeleteProductCart} = useItemCart();

    return (
        <>
            <Navbar/>
            <div className="container my-4">

                <h3>Cart App</h3>
                <CartRoutes 
                    CartItem={CartItem} 
                    handlerAppProductCart={handlerAppProductCart} 
                    handlerDeleteProductCart={handlerDeleteProductCart}
                />
            </div> 
        </>
    )
} 