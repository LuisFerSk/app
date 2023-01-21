import Navbar from './components/navbar/Navbar'
import { TableProduct } from './components'
import { Grid } from '@mui/material'
import { ProductsContext } from '../../context'
import { useContext } from 'react'

export default function Home() {
    const productsContext = useContext(ProductsContext)

    return (
        <Grid container spacing={10}>
            <Grid item xs={12}>
                <Navbar />
            </Grid>
            <Grid item xs={12}>
                <TableProduct products={productsContext.products} />
            </Grid>
        </Grid>
    )
}