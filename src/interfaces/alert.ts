import { AlertColor } from "@mui/material"

export interface AlertInterface {
    title: string
    severity: AlertColor
    isOpen: boolean
}

export interface AlertContextProps extends AlertInterface {
    setTitle: (title: string) => void
    setSeverity: (severity: AlertColor) => void
    open: () => void
    close: () => void
}