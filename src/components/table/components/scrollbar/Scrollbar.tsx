import { Box } from '@mui/material'
import { RootStyle, SimpleBarStyle } from './style'

export default function Scrollbar(props: any) {
    const { children, sx, ...rest } = props

    return (
        <Box sx={{ overflowX: 'auto', ...sx }} {...rest}>
            {children}
        </Box>
    )
}