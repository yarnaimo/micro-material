import styled from '@emotion/styled'
import React, { ComponentProps, PropsWithChildren, useRef } from 'react'
import { mixin } from '../../../mixins'
import { alpha, asStyled, useBool } from '../../../utils'
import { withRipple } from '../Ripple'

export declare namespace Input {
    export type MainP = PropsWithChildren<{
        label: string
        inputProps?: JSX.IntrinsicElements['input']
    }>

    export type LabelBoxP = {}

    export type InputBoxP = {
        hasBlurred: boolean
    }
}

const LabelBox = styled.label<Input.LabelBoxP>({
    ...mixin.reset,
    ...mixin.flex({
        inline: true,
        direction: 'column',
        justifyContent: 'center',
    }),
})

const LabelTextBox = styled.span({
    ...mixin.margin({ bottom: 2 }),
    fontSize: 11,
    color: alpha(mixin.colors.text, 0.8),
})

const RippleBox = withRipple(
    styled.div({
        ...mixin.rippleColor(alpha(mixin.colors.black, 0.4)),
        overflow: 'hidden',
        borderRadius: 8,
    }),
)

const InputBox = styled.input<Input.InputBoxP>(
    {
        ...mixin.reset,
        ...mixin.padding({ x: 12, y: 14 }),
        fontSize: 14,
        border: `${mixin.colors.transparent} solid 1px`,
        borderRadius: 8,

        background: alpha(mixin.colors.black, 0.04),
    },
    ({ hasBlurred }) =>
        hasBlurred && {
            '&:invalid': {
                borderColor: mixin.colors.error,
            },
        },
)

export const Input = asStyled('label', LabelBox, (Box) => {
    const Component = ({ label, inputProps, ...props }: Input.MainP) => {
        const hasBlurredBool = useBool(false)
        const boxProps = { ...props }

        const inputBoxRef = useRef<HTMLInputElement>(null)
        const inputBoxProps: ComponentProps<typeof InputBox> = {
            ...inputProps,
            hasBlurred: hasBlurredBool.value,
            ref: inputBoxRef,
            onBlur: () => {
                hasBlurredBool.on()
            },
        }

        return (
            <Box {...boxProps}>
                <LabelTextBox>{label}</LabelTextBox>
                <RippleBox>
                    <InputBox {...inputBoxProps}></InputBox>
                </RippleBox>
            </Box>
        )
    }
    return Component
})
