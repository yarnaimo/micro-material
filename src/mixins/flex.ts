import { CSSObject } from '@emotion/styled'
import { FlexDirectionProperty } from 'csstype'

export type FlexContainerPropBase = 'flex-start' | 'flex-end' | 'center'

export type JustifyContentProp =
    | FlexContainerPropBase
    | 'space-between'
    | 'space-around'
    | 'space-evenly'

export type AlignItemsProp = FlexContainerPropBase | 'baseline' | 'stretch'

export type AlignContentProp =
    | FlexContainerPropBase
    | 'space-between'
    | 'space-around'
    | 'stretch'

type FlexMixinProps = {
    inline?: boolean
    direction: FlexDirectionProperty
    justifyContent?: JustifyContentProp
    alignItems?: AlignItemsProp
    alignContent?: AlignContentProp
}

export const flex = ({
    inline = false,
    direction: flexDirection,
    justifyContent = 'flex-start',
    alignItems = 'flex-start',
    alignContent = 'flex-start',
}: FlexMixinProps): CSSObject => ({
    display: inline ? 'inline-flex' : 'flex',
    flexDirection,
    justifyContent,
    alignItems,
    alignContent,
})
