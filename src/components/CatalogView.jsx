import { useEffect, useState } from "react";
import { getProducts } from "../services/productServices";
import { ProductCard } from "./ProductCard";

export const CatalogView = ({handler}) => {

    const [products, setProducts] = useState([]);

    useEffect(
        ()=>{
            setProducts(getProducts());
        }, []);

    return (
        <>
            <div className="row">
                {products.map(p => (
                    <div className="col-4 my-2" key={p.id}>
                        <ProductCard
                            handler={handler} 
                            id={p.id} 
                            name={p.name} 
                            description={p.description} 
                            price={p.price}
                        />
                    </div>
                ))}
            </div>
        </>
    );
}