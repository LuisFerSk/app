import { Button, Grid } from "@mui/material"
import { useContext } from "react"
import { condition, connectionType, storageSystem } from "../../../../../constants";
import { ModalContext } from "../../../../../context"
import { ProductType } from "../../../../../interfaces";
import ProductDelete from "../productDelete/ProductDelete";
import ProductUpdate from "../productUpdate/ProductUpdate";

interface Props {
    product: ProductType
}

export default function ProductView(props: Props) {
    const { product } = props;

    const { id, serial } = product;

    const modalContext = useContext(ModalContext)

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6} lg={4}>
                Id: {product.id}
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
                Created: {new Date(product.created_at).toLocaleString()}
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
                Updated: {product.updated_at ? new Date(product.updated_at).toLocaleString() : "never"}
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
                Serial: {serial}
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
                Connection type: {connectionType[product.connection_type]}
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
                Storage system: {storageSystem[product.storage_system]}
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
                Condition: {condition[product.condition]}
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
                Owner: {product.owner}
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
                Location: {product.location}
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
                Manufacturer: {product.manufacturer}
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
                Purchase: {new Date(product.purchase).toLocaleString()}
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
                I max: {product.i_max}
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
                I b: {product.i_b}
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
                I n: {product.i_n}
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
                Seals: {product.seals}
            </Grid>
            <Grid item xs={12} >
                <Button
                    variant="contained"
                    sx={{
                        marginRight: 1
                    }}
                    onClick={() => {
                        modalContext.setTitle(`Update product: ${serial}`)
                        modalContext.setChildren(<ProductUpdate product={product} />)
                        modalContext.open()
                    }}
                >
                    Edit
                </Button>
                <Button
                    color="error"
                    variant="contained"
                    onClick={() => {
                        modalContext.setTitle(`Remove product: ${serial}`)
                        modalContext.setChildren(<ProductDelete id={id} serial={serial} />)
                        modalContext.open()
                    }}
                >
                    Delete
                </Button>
            </Grid>
        </Grid>
    )
}