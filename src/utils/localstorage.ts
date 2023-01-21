type getDataLocalStorageReturn<T> = T | string

export function getDataLocalStorage<T>(key: string, initValue: T | string = ""): getDataLocalStorageReturn<T> {
    try {
        const item = window.localStorage.getItem(key)
        if (item) {
            return JSON.parse(item)
        }
        return initValue;
    } catch (e) {
        console.error(e)
        return initValue;
    }
}

export function setDataLocalStorage(key: string, data: any): boolean {
    try {
        window.localStorage.setItem(key, data)
        return true
    } catch (e) {
        console.error(e)
        return false
    }
}

export function serializeToken(token: string): string {
    return token.replace(/["']/g, '')
}