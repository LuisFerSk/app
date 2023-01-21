import ModalContext, { initModal } from './ModalContext';
import { ProviderProps } from '../../interfaces';
import React, { useState } from 'react';

export default function ModalState(props: ProviderProps) {
    const { children } = props;

    const [modal, setModal] = useState(initModal)

    function setTitle(title: string) {
        setModal((old) => {
            return { ...old, title }
        })
    }

    function setChildren(children: React.ReactNode) {
        setModal((old) => {
            return { ...old, children }
        })
    }

    function open() {
        setModal((old) => {
            return { ...old, isOpen: true }
        })
    }

    function close() {
        setModal((old) => {
            return { ...old, isOpen: false }
        })
    }

    return (
        <ModalContext.Provider
            value={{
                title: modal.title,
                children: modal.children,
                isOpen: modal.isOpen,
                setTitle,
                setChildren,
                open,
                close,
            }}
        >
            {children}
        </ModalContext.Provider>
    )
}