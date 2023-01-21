import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import { CustomPaletteInterface, CustomShadowsInterface, ShapeInterface } from './interfaces'
import ThemeConfig from './theme'
import './index.module.css'

declare module '@mui/material/styles' {
  interface Theme {
    palette: CustomPaletteInterface
    shape: ShapeInterface
    customShadows: CustomShadowsInterface
  }
}
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeConfig>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeConfig>
  </React.StrictMode>,
)
