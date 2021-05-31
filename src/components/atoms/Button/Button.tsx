import styled from '@emotion/styled'
import React, { PropsWithChildren, ReactNode } from 'react'
import { mixin } from '../../../mixins'
import { asStyled } from '../../../utils'
import { IconBox } from '../IconBox'
import { withRipple } from '../Ripple'
import { ButtonBoxBase } from './_ButtonBoxBase'
import { ButtonColorP, ButtonVariant } from './_types'
import { useButtonColor } from './_utils'

export declare namespace Button {
    export type MainP = PropsWithChildren<{
        height?: number
        variant?: ButtonVariant
        color: string
        icon?: ReactNode
    }>

    export type ButtonBoxP = {
        height: number
    } & ButtonColorP
}

const ButtonBox = styled(ButtonBoxBase)<Button.ButtonBoxP>(
    {
        borderRadius: 6,
    },
    ({ height }) => ({
        ...mixin.padding({ x: height * 0.5 - 5 }),
        height,
        minWidth: height * 2.25,
        fontSize: height * 0.25 + 4,
    }),
)

const ButtonIconBox = styled(IconBox)(({ size }) => ({
    ...mixin.margin({ left: 1, right: size * 0.5 }),
}))

export const Button = asStyled('button', ButtonBox, (Box) => {
    const Component = ({
        height = 32,
        variant = 'basic',
        color,
        icon,
        children,
        ...props
    }: Button.MainP) => {
        const buttonColors = useButtonColor(variant, color)

        const boxProps = {
            height,
            ...buttonColors,
            ...props,
        }
        return (
            <Box {...boxProps}>
                {icon && (
                    <ButtonIconBox size={height * 0.5}>{icon}</ButtonIconBox>
                )}
                {children}
            </Box>
        )
    }
    return withRipple(Component)
})
