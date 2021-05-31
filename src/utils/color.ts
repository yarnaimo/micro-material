import { cc, csx } from '../lib/csx'

export const hsl = (h: number, s: number, l: number) => {
    return csx.hsl(h, s.toString(), l.toString()).toHexString()
}

export const alpha = (hex: string, a: number) => {
    return cc(hex).fade(a).toString()
}

export const materialColor = (color: string, variant: string | number) =>
    `var(--md-${color}-${variant})`

export const themeColor = (theme: string) => `var(--mdc-theme-${theme})`
