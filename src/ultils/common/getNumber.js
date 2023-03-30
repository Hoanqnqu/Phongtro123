export const getNumbersPrice = (strng) =>
    strng
        .split(' ')
        .map((item) => +item)
        .filter((item) => !item === false);
export const getNumbersArea = (strng) => {
    return strng
        .split(' ')
        .map((item) => +item.match(/\d+/))
        .filter((item) => item !== 0);
};
