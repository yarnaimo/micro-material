import { css, Global } from '@emotion/core'
import styled from '@emotion/styled'
import '@material/ripple/dist/mdc.ripple.css'
import React from 'react'
import { Children } from '../types/react'

export const RMaterialProvider = ({ children }: Children) => {
    return (
        <>
            <Global styles={globalStyle}></Global>
            <ProviderBlock>{children}</ProviderBlock>
        </>
    )
}

const ProviderBlock = styled.div`
    * {
        box-sizing: border-box;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: inherit;
    }
`

const globalStyle = css({
    html: {
        touchAction: 'manipulation',
        fontSize: 14,
        lineHeight: 1.6,
        overflowWrap: 'break-word',
    },
    body: {
        fontFamily:
            'Ubuntu,-apple-system,BlinkMacSystemFont,Segoe UI,BIZ UDPゴシック,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
    },
})
