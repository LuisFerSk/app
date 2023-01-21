import { AlertState, AuthState, ModalState, ProductState } from "./context";
import { ProviderProps } from "./interfaces";

export default function Providers(props: ProviderProps) {
    const { children } = props;

    return (
        <ModalState>
            <AlertState>
                <AuthState>
                    <ProductState>
                        {children}
                    </ProductState>
                </AuthState>
            </AlertState>
        </ModalState>
    )
}
