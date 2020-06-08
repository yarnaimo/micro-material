import { CSSObject } from '@emotion/styled'
import { is } from '../lib/is'

type NumberOrAuto = number | 'auto'
const isNumberOrAuto = (value: any) => is.number(value) || value === 'auto'

const createSpacer = (type: 'margin' | 'padding' | 'border') => {
    const prop = (directionUppercased: string) =>
        `${type}${directionUppercased}`

    const set = (
        targetObj: CSSObject,
        value: NumberOrAuto | undefined,
        directionUppercased: string,
    ) => {
        if (isNumberOrAuto(value)) {
            targetObj[prop(directionUppercased)] = value
        }
    }

    return ({
        x,
        y,
        ...dimensions
    }: {
        x?: NumberOrAuto
        y?: NumberOrAuto
        top?: NumberOrAuto
        right?: NumberOrAuto
        bottom?: NumberOrAuto
        left?: NumberOrAuto
    }) => {
        if (isNumberOrAuto(x)) {
            dimensions.left = dimensions.right = x
        }
        if (isNumberOrAuto(y)) {
            dimensions.top = dimensions.bottom = y
        }

        const { top, right, bottom, left } = dimensions
        const target: CSSObject = {}

        set(target, top, 'Top')
        set(target, right, 'Right')
        set(target, bottom, 'Bottom')
        set(target, left, 'Left')

        return target
    }
}

export const margin = createSpacer('margin')
export const padding = createSpacer('padding')
export const border = createSpacer('border')
