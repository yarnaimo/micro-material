import { CSSObject } from '@emotion/styled'
import { is } from '../lib/is'

type SizeOptions = { x: string | number; y: string | number }

export const size = (options: SizeOptions | string | number) => {
    if (is.object(options)) {
        return {
            width: options.x,
            height: options.y,
        }
    } else {
        return {
            width: options,
            height: options,
        }
    }
}
export const minSize = ({ x: minWidth, y: minHeight }: SizeOptions) => ({
    minWidth,
    minHeight,
})
export const maxSize = ({ x: maxWidth, y: maxHeight }: SizeOptions) => ({
    maxWidth,
    maxHeight,
})

export const fit: CSSObject = {
    top: 0,
    left: 0,
    ...size('100%'),
}

export const absoluteFit: CSSObject = {
    position: 'absolute',
    ...fit,
}

export const fixedFit: CSSObject = {
    position: 'fixed',
    ...fit,
}

export const pseudoFit: CSSObject = {
    content: '""',
    display: 'block',
    ...absoluteFit,
}
