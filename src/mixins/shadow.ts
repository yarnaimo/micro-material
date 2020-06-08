export const createShadow = (x: number, y: number, b: number, s: number) => (
    color: string,
) => `${x}px ${y}px ${b}px ${s}px ${color}`
