export const calculateSum = (arr, prop) => {
    const total = arr.reduce((a, b) => a + b, 0);
    return parseFloat(Math.round(total * 100) / 100).toFixed(2);
}

export const numToTwoDecimals = num => {
    return parseFloat(Math.round(num * 100) / 100).toFixed(2);
}