import { Paper, PaperProps, Typography } from '@mui/material'

interface SeachNotFoundProps extends PaperProps {
    searchQuery?: string
}

export default function SearchNotFound(props: SeachNotFoundProps) {
    const { searchQuery = '', ...other } = props
    return (
        <div {...other}>
            <Typography gutterBottom align='center' variant='subtitle1'>
                No se encontro
            </Typography>
            <Typography variant='body2' align='center'>
                No se encontraron resultados para &nbsp;
                <strong>&quot;{searchQuery}&quot;</strong>. Intente comprobar si hay errores tipográficos o utilice palabras completas.
            </Typography>
        </div>
    )
}