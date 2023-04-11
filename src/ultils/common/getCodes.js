import { getNumbersArea, getNumbersPrice } from './getNumber';

export const getCodePrice = (totals, min, max) => {
    return totals?.map((item) => {
        let arrMaxMin = getNumbersPrice(item.value);
        return {
            ...item,
            min: arrMaxMin.length === 2 ? arrMaxMin[0] : arrMaxMin[0] === min ? 0 : arrMaxMin[0],
            max: arrMaxMin.length === 2 ? arrMaxMin[1] : arrMaxMin[0] === max ? 9999999 : arrMaxMin[0],
        };
    });
};
export const getCodeArea = (totals, min, max) => {
    return totals?.map((item) => {
        let arrMaxMin = getNumbersArea(item.value);
        return {
            ...item,
            min: arrMaxMin.length === 2 ? arrMaxMin[0] : arrMaxMin[0] === min ? 0 : arrMaxMin[0],
            max: arrMaxMin.length === 2 ? arrMaxMin[1] : arrMaxMin[0] === max ? 9999999 : arrMaxMin[0],
        };
    });
};
export const getCodesPrice = (entry, prices, min, max) => {
    const priceWithMinMax = getCodePrice(prices, min, max);
    return priceWithMinMax.filter((item) => item.min <= entry && entry < item.max);
};
export const getCodesArea = (entry, prices, min, max) => {
    const priceWithMinMax = getCodeArea(prices, min, max);
    return priceWithMinMax.filter((item) => item.min <= entry && entry < item.max);
};
