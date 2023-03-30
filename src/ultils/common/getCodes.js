import { getNumbersArea, getNumbersPrice } from './getNumber';

export const getCodePrice = (totals) => {
    let arr = [];
    return totals?.map((item) => {
        let arrMaxMin = getNumbersPrice(item.value);
        if (arrMaxMin.length === 1) arr.push(arrMaxMin[0]);
        let sortedArr = arr.sort();
        return {
            ...item,
            min: sortedArr.indexOf(arrMaxMin[0]) === 0 ? 0 : arrMaxMin[0],
            max:
                sortedArr.indexOf(arrMaxMin[0]) === 0
                    ? arrMaxMin[0]
                    : sortedArr.indexOf(arrMaxMin[0]) === 1
                    ? 9999999
                    : arrMaxMin[1],
        };
    });
};
export const getCodeArea = (totals) => {
    let arr = [];
    return totals?.map((item) => {
        let arrMaxMin = getNumbersArea(item.value);
        if (arrMaxMin.length === 1) arr.push(arrMaxMin[0]);
        let sortedArr = arr.sort();
        return {
            ...item,
            min: sortedArr.indexOf(arrMaxMin[0]) === 0 ? 0 : arrMaxMin[0],
            max:
                sortedArr.indexOf(arrMaxMin[0]) === 0
                    ? arrMaxMin[0]
                    : sortedArr.indexOf(arrMaxMin[0]) === 1
                    ? 9999999
                    : arrMaxMin[1],
        };
    });
};
export const getCodesPrice = (arrMaxMin, prices) => {
    const priceWithMinMax = getCodePrice(prices);
    return priceWithMinMax.filter(
        (item) =>
            (item.min >= arrMaxMin[0] && item.min <= arrMaxMin[1]) ||
            (item.max >= arrMaxMin[0] && item.max <= arrMaxMin[1]),
    );
};
export const getCodesArea = (arrMaxMin, prices) => {
    const priceWithMinMax = getCodeArea(prices);
    return priceWithMinMax.filter(
        (item) =>
            (item.min >= arrMaxMin[0] && item.min <= arrMaxMin[1]) ||
            (item.max >= arrMaxMin[0] && item.max <= arrMaxMin[1]),
    );
};
