import React, { memo } from 'react';
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const notActive = 'w-[46px] h-[48px] flex justify-center items-center bg-white hover:bg-gray-300  rounded-md';
const active =
    'w-[46px] h-[48px] flex justify-center items-center bg-[#E13427] text-white hover:opacity-90  rounded-md';

function PageNumber({ text, currentPage, icon, setCurrentPage, type }) {
    const navigate = useNavigate();
    const [paramsSearch] = useSearchParams();
    const location = useLocation();
    let entries = paramsSearch.entries();

    const append = (entries) => {
        let params = [];
        paramsSearch.append('page', +text);
        for (let entry of entries) {
            params.push(entry);
        }
        let searchParamsObject = {};
      
        params?.forEach((i) => {
            if (Object.keys(searchParamsObject)?.some((item) => item === i[0]&& item!=='page')) {
                searchParamsObject[i[0]] = [...searchParamsObject[i[0]], i[1]];
            } else {
                searchParamsObject = { ...searchParamsObject, [i[0]]: [i[1]] };
            }
        });
        return searchParamsObject;
    };
    const handeChangePage = () => {
        if (!(text === '...')) {
            setCurrentPage(+text);
            navigate({
                pathname: location.pathname,
                search: createSearchParams(append(entries)).toString(),
            });
        }
    };
    return (
        <div
            className={
                +text === +currentPage
                    ? `${active} ${text === '...' ? 'cursor-text' : 'cursor-pointer'}`
                    : `${notActive} ${text === '...' ? 'cursor-text' : 'cursor-pointer'}`
            }
            onClick={handeChangePage}
        >
            {icon || text}
        </div>
    );
}

export default memo(PageNumber);
