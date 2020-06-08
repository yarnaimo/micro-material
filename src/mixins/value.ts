import { CSSObject } from '@emotion/styled'

// const calc = (exp: string) => `calc(${exp})`

// const important = <T extends string>(value: T) => `${value}!important` as T

// const translate = ({ x = 0, y = 0 }: { x?: number; y?: number }) =>
//     `translate(${x}px, ${y}px)`

export const ellipsis: CSSObject = {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
}

export const verticalScrollable: CSSObject = { overflowX: 'auto' }

export const curve = {
    std: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    acc: 'cubic-bezier(0.4, 0.0, 1, 1)',
    dec: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
}

export const rippleColor = (color: string) => ({
    '&::before, &::after': {
        backgroundColor: color,
    },
})
