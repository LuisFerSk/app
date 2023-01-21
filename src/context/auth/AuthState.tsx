import { useState, useEffect } from 'react'
import { useLocalStorage } from '../../hooks'
import { ProviderProps } from '../../interfaces';
import { serializeToken } from '../../utils'
import AuthContext from './AuthContext';

const initToken = undefined

export default function AuthState(props: ProviderProps): JSX.Element {
    const { children } = props;

    const [user, setUser] = useLocalStorage('user', initToken)

    const [serializedUser, setSerializedUser] = useState<string>(user)

    function logout() {
        setUser(initToken)
    }

    function login() {
        setUser('admin')
    }

    useEffect(() => {
        if (typeof user === 'string' && user.length > 0) {
            const _serializedUser = serializeToken(user)

            setSerializedUser(_serializedUser)

            return;
        }
        setUser(null)
    }, [user])

    return (
        <AuthContext.Provider
            value={{
                user: serializedUser,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}