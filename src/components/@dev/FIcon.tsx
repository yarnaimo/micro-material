import { icons } from 'feather-icons'
import React from 'react'
import { mixin } from '../../mixins'

export const FIcon = ({ iconName }: { iconName: string }) => (
    <div
        style={mixin.size('100%')}
        dangerouslySetInnerHTML={{
            __html: icons[iconName]?.toSvg({
                //   color,
                'stroke-width': 3,
                ...mixin.size('100%'),
            }),
        }}
    ></div>
)
