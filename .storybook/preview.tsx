import { withKnobs } from '@storybook/addon-knobs'
import { addDecorator, DecoratorFn } from '@storybook/react'
import React from 'react'
import { RMaterialProvider } from '../src/components/RMaterialProvider'

addDecorator(withKnobs)

const withRMatelial: DecoratorFn = (story) => (
    <RMaterialProvider>{story()}</RMaterialProvider>
)
addDecorator(withRMatelial)
