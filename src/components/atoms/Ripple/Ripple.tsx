import { Ripple, withRipple as _withRipple } from '@rmwc/ripple'
import { ComponentType } from 'react'

export { Ripple }

export const withRipple = <C extends ComponentType<any>>(Component: C) =>
    _withRipple()(Component)
