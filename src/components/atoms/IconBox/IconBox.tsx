import styled from '@emotion/styled'
import { mixin } from '../../../mixins'

export const IconBox = styled.div<{
    size: number
}>(
    mixin.flex({
        direction: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }),

    ({ size }) => ({
        ...mixin.size(size),
    }),
)
