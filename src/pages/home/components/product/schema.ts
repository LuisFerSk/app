import { object, string, number } from 'yup'

export const productSchema = object().shape({
    serial: string(),
    connection_type: string(),
    storage_system: string(),
    condition: string(),
    owner: string(),
    location: string(),
    manufacturer: string(),
    purchase: string(),
    i_max: number(),
    i_b: number(),
    i_n: number(),
    seals: number()
})

export const productInitialValues = {
    serial: '',
    connection_type: '',
    storage_system: '',
    condition: '',
    owner: '',
    location: '',
    manufacturer: '',
    purchase: '',
    i_max: '',
    i_b: '',
    i_n: '',
    seals: ''
}