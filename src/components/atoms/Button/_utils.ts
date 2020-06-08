import { useMemo } from 'react'
import { mixin } from '../../../mixins'
import { ButtonColorP, ButtonVariant } from './_types'

export const useButtonColor = (
    variant: ButtonVariant,
    color: string,
): ButtonColorP => {
    return useMemo(() => {
        const foreground = {
            filled: mixin.colors.white,
            basic: color,
            outlined: color,
        }[variant]

        const background = {
            filled: color,
            basic: mixin.colors.transparent,
            outlined: mixin.colors.transparent,
        }[variant]

        const border = {
            filled: undefined,
            basic: undefined,
            outlined: `${foreground} 1px solid`,
        }[variant]

        return { color, foreground, background, border }
    }, [variant, color])
}
