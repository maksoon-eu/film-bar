export const findKey = <T extends object>(object: T, value: number) => {
    return (Object.keys(object) as Array<keyof T>).find((key) => object[key] === value)
}