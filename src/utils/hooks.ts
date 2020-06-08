import { useMemo, useState } from 'react'

export const useBool = (initial: boolean) => {
    const [value, set] = useState(initial)
    return useMemo(
        () => ({
            value,
            on: () => set(true),
            off: () => set(false),
            set: (newState: boolean) => set(newState),
            toggle: () => set(!value),

            run: async <T>(fn: () => Promise<T>) => {
                set(true)
                const res = await fn()
                set(false)
                return res
            },
        }),
        [value, set],
    )
}
