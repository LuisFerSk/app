import { useMemo } from 'react'

import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles'

import shape from './shape'
import palette from './palette'

import shadows, { customShadows } from './shadows'

interface ThemeConfigProps {
  children: JSX.Element
}

export default function ThemeConfig(props: ThemeConfigProps): JSX.Element {
  const { children } = props

  const themeOptions = useMemo(() => ({
    palette,
    shape,
    shadows,
    customShadows,
  }), [])

  const theme = createTheme(themeOptions)

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
