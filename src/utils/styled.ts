import { StyledComponent } from '@emotion/styled'
import { ReactHTML } from 'react'
import { SimpleFC } from '../types/react'

export const asStyled = <
    DTag extends keyof ReactHTML,
    DBox extends StyledComponent<any, any, any>,
    P
>(
    defaultTag: DTag,
    defaultBox: DBox,
    factory: (Box: DBox) => SimpleFC<P>,
) => {
    const DefaultComponent = factory(defaultBox) as SimpleFC<
        P & JSX.IntrinsicElements[DTag]
    >

    const withTag = <Tag extends keyof ReactHTML>(Tag: Tag) => {
        const taggedBox = defaultBox.withComponent(Tag)

        return factory(taggedBox as any) as SimpleFC<
            P & JSX.IntrinsicElements[Tag]
        >
    }
    return Object.assign(DefaultComponent, { withTag })
}
