import { filter } from "lodash"
import { EntityInterface } from "../interfaces"

export function addInArray<T>(array: T[] | [], data: T): T[] {
    return [...array, data]
}

export function deleteInArrayData<T extends EntityInterface>(array: T[], id: number): T[] {
    return filter(array, row => row.id !== id)
}

export function updateDataInArray<T extends EntityInterface>(array: T[], id: number, newData: T): T[] {
    const data = deleteInArrayData(array, id)

    return addInArray(data, newData)
}

