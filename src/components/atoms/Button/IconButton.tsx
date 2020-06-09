import styled from '@emotion/styled'
import React from 'react'
import { mixin } from '../../../mixins'
import { Children } from '../../../types/react'
import { roundToEven } from '../../../utils'
import { IconBox } from '../IconBox'
import { withRipple } from '../Ripple'
import { ButtonBoxBase } from './_ButtonBoxBase'
import { ButtonColorP, ButtonVariant } from './_types'
import { useButtonColor } from './_utils'

export declare namespace IconButton {
    export type MainP = Children & {
        size?: number
        variant?: ButtonVariant
        color: string
    }

    export type BoxP = {
        size: number
    } & ButtonColorP
}

export const IconButton = withRipple(
    ({
        size = 40,
        variant = 'filled',
        color,
        children,
        ...props
    }: IconButton.MainP) => {
        const buttonColors = useButtonColor(variant, color)

        return (
            <IconButtonBox size={size} {...buttonColors} {...props}>
                <IconBox size={roundToEven(size * 0.375 + 3)}>
                    {children}
                </IconBox>
            </IconButtonBox>
        )
    },
)

const IconButtonBox = styled(ButtonBoxBase)<IconButton.BoxP>(
    {
        borderRadius: '50%',
    },
    ({ size }) => ({
        ...mixin.size(size),
    }),
)
