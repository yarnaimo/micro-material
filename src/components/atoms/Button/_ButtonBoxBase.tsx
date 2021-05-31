import styled from '@emotion/styled'
import { mixin } from '../../../mixins'
import { ButtonColorP } from './_types'

export const ButtonBoxBase = styled.button<ButtonColorP>(
    {
        ...mixin.reset,
        ...mixin.flex({
            inline: true,
            direction: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        }),

        cursor: 'pointer',
        fontWeight: 600,
    },
    ({ foreground, background, border }) => ({
        background,
        color: foreground,
        border,
        ...mixin.rippleColor(foreground),
    }),
)
