export const findKey = <T extends object, K extends keyof T>(
    object: T,
    needsKey: Array<K>
): Array<{ name: K; value: T[K] }> => {
    return needsKey
        .map((key) => {
            if (key in object) {
                return { name: key, value: object[key] };
            }
        })
        .filter(Boolean) as Array<{ name: K; value: T[K] }>;
};