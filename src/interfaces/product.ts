import { EntityInterface } from "./entity"

export interface ProductInterface {
    serial: string
    connection_type: string
    storage_system: string
    condition: string
    owner: string
    location: string
    manufacturer: string
    purchase: string
    i_max: number
    i_b: number
    i_n: number
    seals: number
}

export type ProductType = ProductInterface & EntityInterface

export type ProductsType = ProductType[];

export interface ProductContextProps {
    products: ProductType[]
    addProduct: (product: ProductType) => void
    updateProduct: (id: number, product: ProductType) => void
    deleteProduct: (id: number) => void
}