export interface AuthContextProps {
    user: string | undefined
    login: () => void
    logout: () => void
}