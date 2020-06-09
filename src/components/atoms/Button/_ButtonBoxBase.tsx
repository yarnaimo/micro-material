import styled from '@emotion/styled'
import { mixin } from '../../../mixins'
import { ButtonColorP } from './_types'

export const ButtonBoxBase = styled.button<ButtonColorP>(
    {
        ...mixin.flex({
            inline: true,
            direction: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        }),
        margin: 0,
        padding: 0,
        border: 'none',
        outline: 'none',
        appearance: 'none',
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
