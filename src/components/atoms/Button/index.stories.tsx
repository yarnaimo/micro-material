import { boolean, number, select, text } from '@storybook/addon-knobs'
import React from 'react'
import { _colors } from '../../../mixins/_colors'
import { FIcon } from '../../@dev/FIcon'
import { Button } from './Button'
import { IconButton } from './IconButton'
import { ButtonVariant } from './_types'

export default {
    title: 'Button',
}

const AnchorButton = Button.withTag('a')

export const Basic = () => {
    const asAnchor = boolean('`a` tag', false)
    const height = number('Height', 32)

    const iconBool = boolean('Icon', false)
    const iconName = text('Icon Name', 'check')
    const icon = iconBool && <FIcon iconName={iconName}></FIcon>

    const label = text('Label', 'ラベル')

    const variant = select<ButtonVariant>(
        'Button Variant',
        ['filled', 'basic', 'outlined'],
        'filled',
    )

    const props = {
        onClick: () => console.log('clicked'),
        height,
        icon,
        variant,
        color: _colors.orange,
        children: label,
    }

    return asAnchor ? (
        <AnchorButton {...props} href=""></AnchorButton>
    ) : (
        <Button {...props}></Button>
    )
}

export const Icon = () => {
    const size = number('Size', 40)

    const iconName = text('Icon Name', 'heart')
    const icon = <FIcon iconName={iconName}></FIcon>

    const variant = select<ButtonVariant>(
        'Button Variant',
        ['filled', 'basic', 'outlined'],
        'filled',
    )

    return (
        <IconButton
            onClick={() => console.log('clicked')}
            {...{ size, icon, variant }}
            color={_colors.orange}
        >
            <FIcon iconName={iconName}></FIcon>
        </IconButton>
    )
}
