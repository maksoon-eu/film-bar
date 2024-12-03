export const getRatingBg = (rating: number, styles: { [key: string]: string }) => {
    if (rating > 7) return styles.green;
    if (rating > 5) return styles.yellow;
    return styles.red;
};
