import styled from '@emotion/styled'
import { mixin } from '../../../mixins'
import { Children } from '../../../types/react'

export declare namespace IconBox {
    export type MainP = Children & {
        size: number
    }
}

export const IconBox = styled.div<IconBox.MainP>(
    mixin.flex({
        direction: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }),

    ({ size }) => ({
        ...mixin.size(size),
    }),
)
