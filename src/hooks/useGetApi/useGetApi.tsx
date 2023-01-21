import { AxiosResponse } from "axios";
import { Dispatch, useEffect, useState, SetStateAction } from "react";

type useGetApiReturn<T> = [
    T,
    Dispatch<SetStateAction<T>>
]

export function useGetApi<T>(get: Promise<AxiosResponse<any, any>>, initState: T): useGetApiReturn<T> {
    const [state, setState] = useState<T>(initState)

    const controller = new AbortController();

    useEffect(() => {
        get.then((response) => {
            setState(response.data.items)
        })

        return controller.abort()
    }, [])

    return [state, setState];
}