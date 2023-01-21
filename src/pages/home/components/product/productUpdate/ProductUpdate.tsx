import { Button, Grid, MenuItem, TextField } from "@mui/material"
import { useFormik } from "formik"
import { useContext, useId } from "react"
import { Form, Select } from "../../../../../components"
import { conditions, connectionsTypes, owners, storagesSystem } from "../../../../../constants"
import { ModalContext, ProductsContext } from "../../../../../context"
import { useFormikFiledProps, useMessage } from "../../../../../hooks"
import { createInterceptorProduct } from "../../../../../interceptor"
import { ProductType } from "../../../../../interfaces"
import { updateProduct } from "../../../../../services"
import { productInitialValues, productSchema } from "../schema"

interface Props {
    product: ProductType
}

export default function ProductUpdate(props: Props) {
    const { product } = props;

    console.log(new Date(product.purchase))

    const [message, setMessage, messageLoader, resetMessage] = useMessage()

    const modalContext = useContext(ModalContext)
    const productsContext = useContext(ProductsContext)

    const uuidConnectionType = useId()
    const uuidStorageSystem = useId()
    const uuidCondition = useId()
    const uuidOwner = useId()

    const formik = useFormik({
        initialValues: product,
        validationSchema: productSchema,
        onSubmit: (data) => {
            messageLoader()

            updateProduct(product.id, data)
                .then((result) => {
                    productsContext.addProduct(data)
                    setMessage('success', 'The product has been saved successfully')
                })
                .catch((err) => {
                    setMessage('error', err.detail)
                })
        },
    })
    const [getFieldFormikProps] = useFormikFiledProps(formik)

    const purchaseField = getFieldFormikProps('purchase')
    purchaseField.value = formik.values.purchase.split('.')[0]

    return (
        <Form formik={formik}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField {...getFieldFormikProps('serial')} fullWidth label="Serial" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Select
                        fullWidth
                        label="Connection type"
                        variant="outlined"
                        {...getFieldFormikProps('connection_type')}
                    >
                        {connectionsTypes.map((connectionType, key) =>
                            <MenuItem key={`${uuidConnectionType}-${key}`} value={connectionType.value}>
                                {connectionType.label}
                            </MenuItem>
                        )}
                    </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Select
                        fullWidth
                        label="Storage system"
                        variant="outlined"
                        {...getFieldFormikProps('storage_system')}
                    >
                        {storagesSystem.map((storageSystem, key) =>
                            <MenuItem key={`${uuidStorageSystem}-${key}`} value={storageSystem.value}>
                                {storageSystem.label}
                            </MenuItem>
                        )}
                    </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Select
                        fullWidth
                        label="Condition"
                        variant="outlined"
                        {...getFieldFormikProps('condition')}
                    >
                        {conditions.map((condition, key) =>
                            <MenuItem key={`${uuidCondition}-${key}`} value={condition.value}>
                                {condition.label}
                            </MenuItem>
                        )}
                    </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Select
                        fullWidth
                        label="Owner"
                        variant="outlined"
                        {...getFieldFormikProps('owner')}
                    >
                        {owners.map((owner, key) =>
                            <MenuItem key={`${uuidOwner}-${key}`} value={owner.value}>
                                {owner.label}
                            </MenuItem>
                        )}
                    </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField {...getFieldFormikProps('location')} fullWidth label="Location" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField {...getFieldFormikProps('manufacturer')} fullWidth label="Manufacturer" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        {...purchaseField}
                        type="datetime-local"
                        label="Purchase"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <TextField {...getFieldFormikProps('i_max')} fullWidth type="number" label="I max" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <TextField {...getFieldFormikProps('i_b')} fullWidth type="number" label="I b" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <TextField {...getFieldFormikProps('i_n')} fullWidth type="number" label="I n" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <TextField {...getFieldFormikProps('seals')} fullWidth type="number" label="Seals" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            marginRight: 1
                        }}
                    >
                        Save
                    </Button>
                    <Button
                        color="error"
                        variant="contained"
                        onClick={() => {
                            modalContext.close()
                        }}
                    >
                        Cancel
                    </Button>
                </Grid>
                <Grid item xs={12} textAlign='center'>
                    {message}
                </Grid>
            </Grid>
        </Form >
    )
}