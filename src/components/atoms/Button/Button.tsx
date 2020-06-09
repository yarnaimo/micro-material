import styled from '@emotion/styled'
import React, { ReactNode } from 'react'
import { mixin } from '../../../mixins'
import { AsP, Children } from '../../../types/react'
import { IconBox } from '../IconBox'
import { withRipple } from '../Ripple'
import { ButtonBoxBase } from './_ButtonBoxBase'
import { ButtonColorP, ButtonVariant } from './_types'
import { useButtonColor } from './_utils'

export declare namespace Button {
    export type MainP = Children &
        AsP & {
            height?: number
            variant?: ButtonVariant
            color: string
            icon?: ReactNode
        }

    export type BoxP = {
        height: number
    } & ButtonColorP
}

export const Button = withRipple(
    ({
        height = 32,
        variant = 'filled',
        color,
        icon,
        children,
        ...props
    }: Button.MainP) => {
        const buttonColors = useButtonColor(variant, color)

        return (
            <ButtonBox height={height} {...buttonColors} {...props}>
                {icon && (
                    <ButtonIconBox size={height * 0.5}>{icon}</ButtonIconBox>
                )}
                {children}
            </ButtonBox>
        )
    },
)

const ButtonBox = styled(ButtonBoxBase)<Button.BoxP>(
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
