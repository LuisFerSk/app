import { createContext } from "react";
import { AuthContextProps } from "../../interfaces";

const initToken = ''

const initialStateAuthState = {
    user: undefined,
    token: initToken,
    login: () => { },
    logout: () => { },
    getUser: () => { return undefined },
}

const AuthContext = createContext<AuthContextProps>(initialStateAuthState)

export default AuthContext;