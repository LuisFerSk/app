import { Button, Grid } from "@mui/material"
import { useContext } from "react"
import { AlertContext, ModalContext, ProductsContext } from "../../../../../context"
import { deleteProduct } from "../../../../../services";

interface Props {
    serial: string
    id: number
}

export default function ProductDelete(props: Props) {
    const { id, serial } = props;

    const modalContext = useContext(ModalContext)
    const alertContext = useContext(AlertContext)
    const productsContext = useContext(ProductsContext)

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} textAlign='center'>
                Are you sure you want to remove the product with serial: {serial}
            </Grid>
            <Grid item xs={12} textAlign='center'>
                <Button
                    variant="contained"
                    sx={{
                        marginRight: 1
                    }}
                    onClick={() => {
                        deleteProduct(id)
                            .then(() => {
                                productsContext.deleteProduct(id)
                                alertContext.setTitle('Product has been successfully removed')
                                alertContext.open()
                                modalContext.close()
                            })
                            .catch(err => {
                                alertContext.setTitle(err.detail)
                                alertContext.setSeverity('error')
                                alertContext.open()
                            })
                    }}
                >
                    Yes
                </Button>
                <Button
                    color="error"
                    variant="contained"
                    onClick={() => {
                        modalContext.close()
                    }}
                >
                    No
                </Button>
            </Grid>
        </Grid>
    )
}