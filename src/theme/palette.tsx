import { alpha } from '@mui/material/styles'

function createGradient(color1: string, color2: string): string {
  return `linear-gradient(to bottom, ${color1}, ${color2})`
}

const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
  500_8: alpha('#919EAB', 0.08),
  500_12: alpha('#919EAB', 0.12),
  500_16: alpha('#919EAB', 0.16),
  500_24: alpha('#919EAB', 0.24),
  500_32: alpha('#919EAB', 0.32),
  500_48: alpha('#919EAB', 0.48),
  500_56: alpha('#919EAB', 0.56),
  500_80: alpha('#919EAB', 0.8),
}

const PRIMARY = {
  lighter: '#8E3299',
  light: '#7A36A3',
  main: '#55368d',
  dark: '#3E36A3',
  darker: '#324699',
  contrastText: '#fff'

}
const SECONDARY = {
  lighter: '#F7B007',
  light: '#D68406',
  main: '#ed7004',
  dark: '#D64906',
  darker: '#F73107',
  contrastText: '#fff'
}
const INFO = {
  lighter: '#4ACEE8',
  light: '#4696C7',
  main: '#518ADB',
  dark: '#4E84F2',
  darker: '#2F5EEB',
  contrastText: '#fff'
}
const SUCCESS = {
  lighter: '#CFE874',
  light: '#ADF279',
  main: '#81DB79',
  dark: '#79F293',
  darker: '#74E8AE',
  contrastText: GREY[800]
}
const WARNING = {
  lighter: '#FFF305',
  light: '#E8C605',
  main: '#FFC107',
  dark: '#E89805',
  darker: '#FF8A05',
  contrastText: GREY[800]
}
const ERROR = {
  lighter: '#E61CBC',
  light: '#C41D85',
  main: '#D92474',
  dark: '#F01D58',
  darker: '#E61C31',
  contrastText: '#fff'
}

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main)
}

export default {
  common: { black: '#000', white: '#fff' },
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  grey: GREY,
  gradients: GRADIENTS,
  divider: GREY[500_24],
  text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
  background: { paper: '#fff', default: '#fff', neutral: GREY[200] },
  action: {
    active: GREY[600],
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48
  }
}
