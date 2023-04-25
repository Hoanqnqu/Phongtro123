import React, { useState } from 'react';
import { Button, InputForm } from '~/components';
import Swal from 'sweetalert2';
const Contact = () => {
    const [payload, setPayload] = useState({
        name: '',
        phone: '',
        content: '',
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(payload);
        Swal.fire(`Thanks! ${payload.name || ''}`, `cảm ơn bạn đã liên hệ`, 'success').then(() => {
            setPayload({ name: '', phone: '', content: '' });
        });
    };
    return (
        <form onSubmit={handleSubmit} className="w-full">
            <h1 className="text-2xl font-semibold mb-6">Liên hệ với chúng tôi</h1>
            <div className="flex gap-4">
                <div className="flex-1 flex flex-col gap-4 bg-red-400 rounded-3xl p-4 text-white bg-gradient-to-tr from-blue-700 to-cyan-400 ">
                    <h4 className="font-medium">Thông tin liên hệ</h4>
                    <span>
                        Chúng tôi biết bạn có rất nhiều sự lựa chọn. Nhưng cảm ơn vì đã lựa chọn PhongTro123.Com
                    </span>
                    <span>Điện thoại: 0917 686 101</span>
                    <span>Email: cskh.phongtro123@gmail.com</span>
                    <span>Zalo: 0917 686 101</span>
                    <span>Viber: 0917 686 10</span>
                    <span>
                        Địa chỉ: LD-06.04, Toà nhà Lexington Residence, Số 67 Mai Chí Thọ, Phường An Phú, Quận 2, Tp. Hồ
                        Chí Minh.
                    </span>
                </div>
                <div className="flex-1 bg-white shadow-md rounded-md p-4 mb-6">
                    <h4 className="font-medium text-lg mb-4">Liên hệ trực tuyến</h4>
                    <div className="flex flex-col gap-4">
                        <InputForm
                            label={'HỌ VÀ TÊN CỦA BẠN'}
                            value={payload.name}
                            setValue={setPayload}
                            name={'name'}
                        />

                        <InputForm label={'SỐ ĐIỆN THOẠI'} value={payload.phone} setValue={setPayload} name={'phone'} />
                        <div>
                            <label htmlFor="desc">NỘI DUNG MÔ TẢ </label>
                            <textarea
                                className="outline-none bg-[#e8f0fe] p-2 rounded-md w-full"
                                id="desc"
                                cols={'30'}
                                rows={'3'}
                                onChange={(e) => setPayload((prev) => ({ ...prev, content: e.target.value }))}
                                setValue={setPayload}
                                value={payload.content}
                            >
                                {' '}
                            </textarea>
                        </div>
                        <Button
                            type="submit"
                            text={'Gửi liên hệ'}
                            bgColor={'bg-blue-500'}
                            textColor={'text-white'}
                            fullWidth
                        />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Contact;
