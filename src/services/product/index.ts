import axios from "axios";
import { product } from "../../constants";
import { ProductInterface } from "../../interfaces";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export function readProducts() {
    return axios.get(`${baseUrl}`)
}

export function deleteProduct(id: number) {
    return axios.delete(`${baseUrl}/${id}`)
}

export function updateProduct(id: number, product: ProductInterface) {
    return axios.patch(`${baseUrl}/${id}`, product)
}

export function createProduct() {
    return axios.post(`${baseUrl}`, product)
}