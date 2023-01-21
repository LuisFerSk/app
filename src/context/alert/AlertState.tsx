import AlertContext, { initAlert } from './AlertContext';
import { ProviderProps } from '../../interfaces';
import { useState } from 'react';
import { AlertColor } from '@mui/material';

export default function AlertState(props: ProviderProps) {
    const { children } = props;

    const [modal, setAlert] = useState(initAlert)

    function setTitle(title: string) {
        setAlert((old) => {
            return { ...old, title }
        })
    }

    function setSeverity(severity: AlertColor) {
        setAlert((old) => {
            return { ...old, severity }
        })
    }

    function open() {
        setAlert((old) => {
            return { ...old, isOpen: true }
        })
    }

    function close() {
        setAlert((old) => {
            return { ...old, isOpen: false }
        })
    }

    return (
        <AlertContext.Provider
            value={{
                title: modal.title,
                severity: modal.severity,
                isOpen: modal.isOpen,
                setSeverity,
                setTitle,
                open,
                close,
            }}
        >
            {children}
        </AlertContext.Provider>
    )
}