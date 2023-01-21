import React from "react"

export interface ModalInterface {
    title: string
    children: React.ReactNode
    isOpen: boolean
}

export interface ModalContextProps extends ModalInterface {
    setTitle: (title: string) => void
    setChildren: (children: React.ReactNode) => void
    open: () => void
    close: () => void
}