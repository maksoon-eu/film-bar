export const findKey = <T extends object, K extends keyof T>(
    object: T,
    needsKey: Array<K>
): Array<{ name: K; value: T[K] }> => {
    return needsKey.reduce(
        (acc, key) => {
            if (key in object && object[key]) {
                acc.push({ name: key, value: object[key] });
            }
            return acc;
        },
        [] as Array<{ name: K; value: T[K] }>
    );
};
