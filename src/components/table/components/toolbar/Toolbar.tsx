import { Icon } from '@iconify/react'
import searchFill from '@iconify/icons-eva/search-fill'
import { styled } from '@mui/material/styles'
import {
    Box,
    Toolbar as MaterialToolbar,
    OutlinedInput,
    InputAdornment,
    Button,
} from '@mui/material'

import { ChangeEvent, useContext } from 'react'
import { createProduct } from '../../../../services'
import { AlertContext, ProductsContext } from '../../../../context'

const RootStyle = styled(MaterialToolbar)(({ theme }) => ({
    height: 96,
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1, 0, 3),
}))

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
    width: 240,
    transition: theme.transitions.create(['box-shadow', 'width'], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter,
    }),
    '&.Mui-focused': { width: 320, boxShadow: theme.customShadows.z8 },
    '& fieldset': {
        borderWidth: `1px !important`,
        borderColor: `${theme.palette.grey[500_32]} !important`,
    }
}))

interface TableListToolbarProps {
    filter: string
    onFilter: (event: ChangeEvent<HTMLInputElement>) => void
    type?: string
    placeholder?: string
}

export default function Toolbar(props: TableListToolbarProps) {
    const {
        filter,
        onFilter,
        type = 'text',
        placeholder = 'Seek',
    } = props;

    const alertContext = useContext(AlertContext)
    const productsContext = useContext(ProductsContext)

    return (
        <RootStyle>
            <SearchStyle
                type={type}
                value={filter}
                onChange={onFilter}
                placeholder={placeholder}
                startAdornment={
                    <InputAdornment position='start'>
                        <Box component={Icon} icon={searchFill} sx={{ color: 'text.disabled' }} />
                    </InputAdornment>
                }
            />
            <Button
                variant="contained"
                sx={{ position: 'absolute', right: 20 }}
                onClick={() => {
                    createProduct()
                        .then((resolve) => {
                            productsContext.addProduct(resolve.data)
                            alertContext.setTitle('The product has been saved successfully')
                            alertContext.setSeverity('success')
                            alertContext.open()
                        })
                        .catch(err => {
                            alertContext.setTitle(err.detail)
                            alertContext.setSeverity('error')
                            alertContext.open()
                        })
                }}
            >
                Add product
            </Button>
        </RootStyle>
    )
}