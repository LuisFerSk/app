import { createContext } from "react";
import { AlertContextProps } from "../../interfaces";

export const initAlert: AlertContextProps = {
    title: '',
    severity: 'info',
    isOpen: false,
    setTitle: () => { },
    setSeverity: () => { },
    open: () => { },
    close: () => { }
}

const AlertContext = createContext<AlertContextProps>(initAlert)

export default AlertContext;