import React, { ComponentProps } from 'react'
import { Input } from './Input'

export default {
    title: 'Input',
}

export const Basic = () => {
    const emailProps: ComponentProps<typeof Input> = {
        label: 'メールアドレス',
        inputProps: { type: 'email' },
    }
    const textProps: ComponentProps<typeof Input> = {
        label: 'テキスト (8文字以上)',
        inputProps: { type: 'text', required: true, minLength: 8 },
    }

    return (
        <>
            <Input {...emailProps}></Input>
            <Input {...textProps}></Input>
        </>
    )
}
