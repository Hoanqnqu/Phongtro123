import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import icons from '~/assets/icons';
import { SearchItem } from '~/components';
import Modal from '~/components/Modal';

const {
    AiOutlinePlusCircle,
    GrNext,
    BsChevronRight,
    HiOutlineLocationMarker,
    TbReportMoney,
    RiCrop2Line,
    MdOutlineHouseSiding,
    FiSearch,
} = icons;

function Search() {
    const [isShowModel, setIsShowModal] = useState(false);
    const [content, setContent] = useState([]);
    const [name, setName] = useState('');
    const { provinces, areas, prices, categories } = useSelector((state) => state.app);
    const [queries, setQueries] = useState({});

    const handleShowModal = (content, name) => {
        setContent(content);
        setName(name);
        setIsShowModal(true);
    };
    const handleSubmit = (e, query) => {
        e.stopPropagation();
        setQueries((prev) => ({ ...prev, ...query }));
        setIsShowModal(false);
    };
   
    return (
        <>
            <div className="p-[10px] w-3/5 my-3 bg-[#febb02] rounded-lg flex-col lg:flex-row flex items-center justify-around gap-2">
                <span
                    className="flex-1 cursor-pointer "
                    onClick={() => handleShowModal(categories, 'Phòng trọ, nhà trọ')}
                >
                    <SearchItem
                        IconBefore={<MdOutlineHouseSiding />}
                        fontWeight
                        IconAfter={<BsChevronRight color="rgb(156,163,175) " />}
                        text={queries.category}
                        defaultText={'Phòng trọ, nhà trọ'}
                    />
                </span>
                <span className="flex-1 cursor-pointer " onClick={() => handleShowModal(provinces, 'Toàn quốc')}>
                    <SearchItem
                        IconBefore={<HiOutlineLocationMarker />}
                        IconAfter={<BsChevronRight color="rgb(156,163,175) " />}
                        text={queries.province}
                        defaultText={'Toàn quốc'}
                    />
                </span>
                <span className="flex-1 cursor-pointer " onClick={() => handleShowModal(prices, 'Chọn giá')}>
                    <SearchItem
                        IconBefore={<TbReportMoney />}
                        IconAfter={<BsChevronRight color="rgb(156,163,175) " />}
                        text={queries.price}
                        defaultText={'Chọn giá'}
                    />
                </span>
                <span className="flex-1 cursor-pointer " onClick={() => handleShowModal(areas, 'Chọn diện tích')}>
                    <SearchItem
                        IconBefore={<RiCrop2Line />}
                        IconAfter={<BsChevronRight color="rgb(156,163,175) " />}
                        text={queries.area}
                        defaultText={'Chọn diện tích'}
                    />
                </span>
                <button
                    type="button"
                    className="outline-none flex-1 cursor-pointer  py-2 px-4 w-full bg-secondary1 text-[13.3px] flex items-center justify-center gap-2 text-white font-medium rounded-md"
                >
                    <FiSearch />
                    Tìm kiếm
                </button>
            </div>
            {isShowModel && (
                <Modal handleSubmit={handleSubmit} queries= {queries} setIsShowModal={setIsShowModal} content={content} name={name} />
            )}
        </>
    );
}

export default Search;
