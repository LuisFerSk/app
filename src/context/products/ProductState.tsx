import ProductsContext from './ProductsContext';
import { ProductsType, ProductType, ProviderProps } from '../../interfaces';
import { useGetApi } from '../../hooks';
import { readProducts } from '../../services';
import { addInArray, deleteInArrayData, updateDataInArray } from '../../utils';

export default function ProductState(props: ProviderProps): JSX.Element {
    const { children } = props;

    const [products, setProducts] = useGetApi<ProductsType>(readProducts(), [])

    function addProduct(product: ProductType) {
        setProducts((old) => {
            return addInArray(old, product)
        })
    }

    function updateProduct(id: number, product: ProductType) {
        setProducts((old) => {
            return updateDataInArray(old, id, product)
        })
    }

    function deleteProduct(id: number) {
        setProducts((old) => {
            return deleteInArrayData(old, id)
        })
    }

    return (
        <ProductsContext.Provider
            value={{
                products,
                addProduct,
                updateProduct,
                deleteProduct
            }}
        >
            {children}
        </ProductsContext.Provider>
    )
}