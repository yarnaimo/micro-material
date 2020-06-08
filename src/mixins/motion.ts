import { CSSObject } from '@emotion/css'
import { Properties } from 'csstype'
import { curve } from './value'

export class Motion {
    hyphenateRegex = /[A-Z]|^ms/g

    join(array: any[]) {
        return array.join(', ')
    }

    processSeconds(seconds: number[]) {
        return this.join(seconds.map((time) => `${time}s`))
    }

    repeat<T>(length: number, array: T[]) {
        return Array(length)
            .fill(null)
            .map((_, i) => array[i % array.length])
    }

    easingType: string[] = []
    properties: string[] = []
    durations: number[] = []
    delays: number[] = []

    add(
        easingType: keyof typeof curve,
        properties: (keyof Properties)[],
        durations: number[] = [0.2],
        delays: number[] = [0],
    ) {
        const { length } = properties
        const clone = new Motion()
        clone.easingType = [
            ...this.easingType,
            ...clone.repeat(length, [curve[easingType]]),
        ]
        clone.properties = [
            ...this.properties,
            ...(properties as string[]).map((styleName: string) =>
                styleName.replace(clone.hyphenateRegex, '-$&').toLowerCase(),
            ),
        ]
        clone.durations = [
            ...this.durations,
            ...clone.repeat(length, durations),
        ]
        clone.delays = [...this.delays, ...clone.repeat(length, delays)]

        return clone
    }

    toCss(): CSSObject {
        const propertyString = this.join(this.properties)
        return {
            transitionTimingFunction: this.join(this.easingType),
            transitionProperty: propertyString,
            transitionDuration: this.processSeconds(this.durations),
            transitionDelay: this.processSeconds(this.delays),
            willChange: propertyString,
        }
    }
}

export const duration = 0.32
export const durationShort = 0.16

export const motion = (
    easingType: keyof typeof curve,
    properties: (keyof Properties)[],
    durations?: number[],
    delays: number[] = [0],
) => {
    const _motion = new Motion()
    return _motion.add(easingType, properties, durations, delays).toCss()
}
