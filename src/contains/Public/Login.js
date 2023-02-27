import React, { useEffect, useState } from 'react';
import { Button, InputForm } from '~/components';
// import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { apiRegister } from '~/services/auth';
import * as actions from '~/store/actions';
import { useDispatch } from 'react-redux';

function Login() {
    const location = useLocation();
    const dispath = useDispatch();
    const [isRegister, setRegister] = useState(location.state?.flag);
    const [payload, setPayload] = useState({
        phone: '',
        password: '',
        name: '',
    });
    useEffect(() => {
        setRegister(location.state?.flag);
    }, [location.state?.flag]);

    const handleSubmit = async () => {
        dispath(actions.register(payload));
    };
    return (
        <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-md">
            <h3 className="font-semibold text-2xl mb-3">{isRegister ? 'Đăng kí tài khoản' : 'Đăng nhập'}</h3>
            <div className="w-full">
                <div className="w-full flex flex-col gap-5">
                    {isRegister && (
                        <InputForm label={'HỌ TÊN'} value={payload.name} setValue={setPayload} type={'name'} />
                    )}
                    <InputForm label={'SỐ ĐIỆN THOẠI'} value={payload.phone} setValue={setPayload} type={'phone'} />
                    <InputForm label={'MẬT KHÂU'} value={payload.password} setValue={setPayload} type={'password'} />
                    <Button
                        text={isRegister ? 'Đăng kí' : 'Đăng nhập'}
                        bgColor="bg-secondary1"
                        textColor="text-white"
                        fullWidth
                        onClick={handleSubmit}
                    />
                </div>
            </div>
            <div className="mt-7 flex items-center justify-between">
                {isRegister ? (
                    <small>
                        Bạn đã có tài khoản ?
                        <span
                            className="text-blue-500 hover:underline cursor-pointer"
                            onClick={() => setRegister(false)}
                        >
                            Đăng nhập ngay
                        </span>
                    </small>
                ) : (
                    <>
                        <small className="text-[blue] hover:text-[red] cursor-pointer">Bạn quên mật khẩu</small>
                        <small
                            onClick={() => setRegister(true)}
                            className="text-[blue] hover:text-[red] cursor-pointer"
                        >
                            Tạo tài khoản mới
                        </small>
                    </>
                )}
            </div>
        </div>
    );
}

export default Login;
