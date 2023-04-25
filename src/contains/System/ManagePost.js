import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment/moment';
import 'moment/locale/vi';
import 'flowbite';

import * as actions from '~/store/actions';
import { UpdatePost } from '~/components';
const ManagePost = () => {
    const dispath = useDispatch();
    const { postsOfCurrent } = useSelector((state) => state.post);
    const { dataEdit } = useSelector((state) => state.post);

    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        dispath(actions.getLimitPostsAdmin());
    }, []);

    useEffect(() => {
        if (!dataEdit) {
            setIsEdit(false);
            dispath(actions.getLimitPostsAdmin());
        }
    }, [dataEdit]);
    console.log(postsOfCurrent);
    const compareDate = (expiredString) => {
        const expired = new Date(expiredString);
        const currentTime = new Date();

        if (currentTime <= expired) return 'Đang hoạt động';
        else return 'Đã hết hạn';
    };
    return (
        <div>
            <div className="border-b border-solid flex items-center justify-between mb-4">
                <h1 className="text-3xl font-medium py-4 border-gray-200">Quản lí tin đăng</h1>
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
                            <th scope="col" className="px-6 py-3">
                                Tùy chọn
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
                                        <td className="px-6 py-2 text-left">{item?.overview?.code}</td>
                                        <td className="px-6 py-2 text-left flex justify-start items-center">
                                            <img
                                                src={JSON.parse(item?.images?.image)[0] || 0}
                                                alt=""
                                                className="w-10 h-10 object-cover rounded-md"
                                            />
                                        </td>
                                        <td className="px-6 py-2 text-left">{item?.title}</td>
                                        <td className="px-6 py-2 text-left">{item?.attributes?.price}</td>

                                        <td className="px-6 py-2 text-left">
                                            {moment(item?.overview?.created).format('HH:mm DD/MM/YYYY')}
                                        </td>
                                        <td className="px-6 py-2 text-left">
                                            {moment(item?.overview?.expired).format('HH:mm DD/MM/YYYY')}
                                        </td>
                                        <td className="px-6 py-2 text-left">{compareDate(item?.overview?.expired)}</td>
                                        <td className="px-6 py-2 text-left flex justify-center items-center">
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setIsEdit(true);
                                                    dispath(actions.editData(item));
                                                }}
                                                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                type="button"
                                                className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>
            {isEdit && <UpdatePost setIsEdit={setIsEdit} />}
        </div>
    );
};

export default ManagePost;
