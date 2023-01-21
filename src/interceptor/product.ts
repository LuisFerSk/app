import { toInteger } from "lodash";

export function createInterceptorProduct(data: Record<any, string>) {
    return {
        serial: data.serial,
        connection_type: data.connection_type,
        storage_system: data.storage_system,
        condition: data.condition,
        owner: data.owner,
        location: data.location,
        manufacturer: data.manufacturer,
        purchase: data.purchase,
        i_max: toInteger(data.i_max),
        i_b: toInteger(data.i_b),
        i_n: toInteger(data.i_n),
        seals: toInteger(data.seals)
    }
}