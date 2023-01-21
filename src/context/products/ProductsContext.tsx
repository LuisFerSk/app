import { createContext } from "react";
import { ProductContextProps } from "../../interfaces";

const initialProductState = {
    products: [],
    addProduct: () => { },
    updateProduct: () => { },
    deleteProduct: () => { },
}

const ProductsContext = createContext<ProductContextProps>(initialProductState)

export default ProductsContext;