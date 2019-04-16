export const calculateSum = (arr, prop) => {
    const total = arr.reduce((a, b) => a + b[prop], 0);
    return total.toFixed(2);
}