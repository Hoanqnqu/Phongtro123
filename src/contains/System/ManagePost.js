import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment/moment';
import 'moment/locale/vi';

import * as actions from '~/store/actions';
const ManagePost = () => {
    const dispath = useDispatch();
    const { postsOfCurrent } = useSelector((state) => state.post);

    useEffect(() => {
        dispath(actions.getLimitPostsAdmin());
    }, []);
    console.log(postsOfCurrent);
    const compareDate = (expiredString) => {
        const expired = new Date(expiredString);
        const currentTime = new Date();
    
        if (currentTime <= expired) return 'Đang hoạt động';
        else return 'Hết hạn';
    };
    return (
        <div>
            <div className="py-4 border-b bg-gray-200 flex items-center justify-between">
                <h1 className="text-3xl font-medium py-4 border-b border-gray-200">Quản lí tin đăng</h1>
                <select className="outline-none border p-2 border-gray-200 rounded-md">
                    <option value={''}>Lọc theo trạng thái</option>
                </select>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Mã tin
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Anh đại diện
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Tiêu đề
                            </th>
                            <th scope="col" className="px-6 py-3">
                                giá
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Ngày bắt đầu
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Ngày hết hạn
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Trạng thái
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {!postsOfCurrent ? (
                            <tr>
                                <td></td>
                            </tr>
                        ) : (
                            postsOfCurrent?.map((item) => {
                                return (
                                    <tr
                                        key={item.id}
                                        className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                                    >
                                        <td className="px-6 py-4 text-left">{item?.overview?.code}</td>
                                        <td className="px-6 py-4 text-left flex justify-start items-center">
                                            <img
                                                src={JSON.parse(item?.images?.image)[0] || 0}
                                                alt=""
                                                className="w-10 h-10 object-cover rounded-md"
                                            />
                                        </td>
                                        <td className="px-6 py-4 text-left">{item?.title}</td>
                                        <td className="px-6 py-4 text-left">{item?.attributes?.price}</td>

                                        <td className="px-6 py-4 text-left">
                                            {moment(item?.overview?.created).format('HH:mm:ss DD/MM/YYYY')}
                                        </td>
                                        <td className="px-6 py-4 text-left">
                                            {moment(item?.overview?.expired).format('HH:mm:ss DD/MM/YYYY')}
                                        </td>
                                        <td className="px-6 py-4 text-left">{compareDate(item?.overview?.expired)}</td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManagePost;
