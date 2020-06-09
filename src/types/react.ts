import { ElementType, ReactNode } from 'react'

export type Children = {
    children?: ReactNode
}

export type AsP = {
    as?: ElementType | keyof JSX.IntrinsicElements
}
