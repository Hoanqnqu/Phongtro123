import React, { useEffect } from 'react';
import Button from './Button';
import Item from './Item';
import { getLimitPosts } from '~/store/actions/post';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

function List({ categoryCode }) {
    const dispath = useDispatch();
    const [searchParams] = useSearchParams();
    const { posts } = useSelector((state) => state.post);

    useEffect(() => {
        let params = [];
        for (let entry of searchParams.entries()) {
            params.push(entry);
        }
        let searchParamsObject = {};
       
        params?.forEach((i) => {
            if (Object.keys(searchParamsObject)?.some((item) => item === i[0])) {
                searchParamsObject[i[0]] = [...searchParamsObject[i[0]], i[1]];
            } else {
                searchParamsObject = { ...searchParamsObject, [i[0]]: [i[1]] };
            }
        });
        if (categoryCode) searchParamsObject.categoryCode = categoryCode;
        // let page = searchParams.get('page') || 0;
        // let offset = page ? +page - 1 : 0;
        console.log(searchParamsObject);
        dispath(getLimitPosts(searchParamsObject));
    }, [searchParams, categoryCode]);

    //console.log(posts);
    return (
        <div className="w-full  bg-white  shadow-md rounded-md py-2">
            <div className="flex items-center justify-between my-3 px-4">
                <h4 className="text-xl font-semibold"> Danh sách tin đăng</h4>
                <span>Cập nhật: 12:05 25/02/2023</span>
            </div>
            <div className="flex items-center gap-2 my-2 px-4">
                <span>Sắp xếp:</span>
                <Button bgColor="bg-gray-200" text="Mặc định" />
                <Button bgColor="bg-gray-200" text="Mới nhất" />
            </div>
            <div className="items">
                {posts?.length > 0 &&
                    posts.map((item) => {
                        return (
                            <Item
                                key={item?.id}
                                address={item?.address}
                                attributes={item?.attributes}
                                description={JSON.parse(item?.description)}
                                images={JSON.parse(item?.images?.image)}
                                star={+item?.star}
                                title={item?.title}
                                user={item?.user}
                                id={item?.id}
                            />
                        );
                    })}
            </div>
        </div>
    );
}

export default List;
