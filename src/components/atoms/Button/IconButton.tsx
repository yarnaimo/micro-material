import styled from '@emotion/styled'
import React, { PropsWithChildren } from 'react'
import { mixin } from '../../../mixins'
import { asStyled, roundToEven } from '../../../utils'
import { IconBox } from '../IconBox'
import { withRipple } from '../Ripple'
import { ButtonBoxBase } from './_ButtonBoxBase'
import { ButtonColorP, ButtonVariant } from './_types'
import { useButtonColor } from './_utils'

export declare namespace IconButton {
    export type MainP = PropsWithChildren<{
        size?: number
        variant?: ButtonVariant
        color: string
    }>

    export type BoxP = {
        size: number
    } & ButtonColorP
}

const IconButtonBox = styled(ButtonBoxBase)<IconButton.BoxP>(
    {
        borderRadius: '50%',
    },
    ({ size }) => ({
        ...mixin.size(size),
    }),
)

export const IconButton = asStyled('button', IconButtonBox, (Box) => {
    const Component = ({
        size = 40,
        variant = 'basic',
        color,
        children,
        ...props
    }: IconButton.MainP) => {
        const buttonColors = useButtonColor(variant, color)

        return (
            <Box size={size} {...buttonColors} {...props}>
                <IconBox size={roundToEven(size * 0.375 + 3)}>
                    {children}
                </IconBox>
            </Box>
        )
    }
    return withRipple(Component)
})
