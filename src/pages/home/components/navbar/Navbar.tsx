import { Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import { BitStyle, RootStyle, ToolbarStyle } from './style'

export default function Navbar() {
    const theme = useTheme()

    return (
        <RootStyle>
            <ToolbarStyle>
                <Link to="/login">
                    <Typography variant='h2' color={theme.palette.primary.main}>
                        ener<BitStyle>Bit</BitStyle>
                    </Typography>
                </Link>
            </ToolbarStyle>
        </RootStyle >
    )
}