import { Breakpoints, Color, Palette, PaletteColor, TypeBackground } from "@mui/material";
import { Shape } from "@mui/system";

export type ColorThemeType = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'

export interface CustomShadowsInterface {
    z1: string;
    z4: string;
    z8: string;
    z12: string;
    z16: string;
    z20: string;
    z24: string;
    primary: string;
    secondary: string;
    info: string;
    success: string;
    warning: string;
    error: string;
    card: string;
    dialog: string;
    dropdown: string;
}

export interface ShapeInterface extends Shape {
    borderRadiusSm: number;
    borderRadiusMd: number;
}

export interface PaletteBackgroundInterface extends TypeBackground {
    neutral: string
}

export interface PaletteGradientsInterface {
    primary: string;
    info: string;
    success: string;
    warning: string;
    error: string;
}

export interface PaletteGreyInterface extends Color {
    0: string;
    5008: string;
    50012: string;
    50016: string;
    50024: string;
    50032: string;
    50048: string;
    50056: string;
    50080: string;
}

export interface PaletteColorInterface extends PaletteColor {
    lighter: string;
    darker: string;
}

export interface CustomPaletteInterface extends Palette {
    primary: PaletteColorInterface
    secondary: PaletteColorInterface
    info: PaletteColorInterface
    success: PaletteColorInterface
    warning: PaletteColorInterface
    error: PaletteColorInterface
    grey: PaletteGreyInterface
    gradients: PaletteGradientsInterface
    divider: string,
    background: PaletteBackgroundInterface
}

interface BreakpointValueInterface {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
}

export interface BreakpointsInterface extends Breakpoints {
    values: BreakpointValueInterface
}