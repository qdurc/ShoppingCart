import { Route, Routes } from "react-router-dom"
import { CatalogView } from "../components/CatalogView"
import { CartView } from "../components/CartView"

export const CartRoutes = ({handlerAppProductCart, handlerDeleteProductCart, CartItem}) => {
  return (
    <>
        <Routes>

            <Route
                path="catalog" 
                element={<CatalogView handler={handlerAppProductCart}/>}
            />

            <Route 
                path="cart" element={(
                    CartItem?.length <= 0 ?
                        <div className="alert alert-warning">No hay productos en el carrito de compras!</div>
                        :
                        (
                            <div className="my-4 w-50">
                                <CartView items={CartItem} handlerDelete={handlerDeleteProductCart}/>
                            </div>
                        )
                )}
            />

        </Routes>
    </>
  )
}
