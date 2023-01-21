import { createContext } from "react";
import { ModalContextProps } from "../../interfaces";

export const initModal: ModalContextProps = {
    title: '',
    children: <></>,
    isOpen: false,
    setTitle: () => { },
    setChildren: () => { },
    open: () => { },
    close: () => { }
}

const ModalContext = createContext<ModalContextProps>(initModal)

export default ModalContext;