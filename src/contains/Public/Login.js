import React, { useEffect, useState } from 'react';
import { Button, InputForm } from '~/components';
// import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
// import { apiRegister } from '~/services/auth';
import * as actions from '~/store/actions';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

function Login() {
    const location = useLocation();
    const dispath = useDispatch();
    const navigate = useNavigate();
    const { isLoggedIn, msg, update } = useSelector((state) => state.auth);
    const [invalidFields, setInvalidField] = useState([]);
    const [isRegister, setRegister] = useState(location.state?.flag);
    const [payload, setPayload] = useState({
        phone: '',
        password: '',
        name: '',
    });
    useEffect(() => {
        setRegister(location.state?.flag);
    }, [location.state?.flag]);

    useEffect(() => {
        isLoggedIn && navigate('/');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoggedIn]);

    useEffect(() => {
        msg && Swal.fire('Oops !,', msg, 'error');
    }, [msg, update]);

    const handleSubmit = async () => {
        let finalPayload = isRegister
            ? payload
            : {
                  phone: payload.phone,
                  password: payload.password,
              };
        let invalids = validate(finalPayload);
        console.log(invalids);
        if (invalids === 0) isRegister ? dispath(actions.register(finalPayload)) : dispath(actions.login(finalPayload));
    };

    const validate = (payload) => {
        let invalids = 0;
        let fields = Object.entries(payload);
        fields.forEach((item) => {
            if (item[1] === '') {
                setInvalidField((prev) => [
                    ...prev,
                    {
                        name: item[0],
                        message: 'Bạn không được để trống vùng này.',
                    },
                ]);
                invalids++;
            }
        });
        fields.forEach((item) => {
            switch (item[0]) {
                case 'password':
                    if (item[1].length < 6) {
                        setInvalidField((prev) => [
                            ...prev,
                            {
                                name: item[0],
                                message: 'Mật Khẩu phải có tối thiểu 6 kí tự.',
                            },
                        ]);
                        invalids++;
                    }
                    break;
                case 'phone':
                    if (!+item[1]) {
                        setInvalidField((prev) => [
                            ...prev,
                            {
                                name: item[0],
                                message: 'Số điện thoại bạn không hợp lệ.',
                            },
                        ]);
                        invalids++;
                    }
                    break;
                default:
                    break;
            }
        });
        return invalids;
    };

    return (
        <div className="w-full flex justify-center">
            <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-md">
                <h3 className="font-semibold text-2xl mb-3">{isRegister ? 'Đăng kí tài khoản' : 'Đăng nhập'}</h3>
                <div className="w-full">
                    <div className="w-full flex flex-col gap-5">
                        {isRegister && (
                            <InputForm
                                label={'HỌ TÊN'}
                                invalidFields={invalidFields}
                                value={payload.name}
                                setValue={setPayload}
                                setInvalidField={setInvalidField}
                                name={'name'}
                            />
                        )}
                        <InputForm
                            label={'SỐ ĐIỆN THOẠI'}
                            invalidFields={invalidFields}
                            value={payload.phone}
                            setValue={setPayload}
                            setInvalidField={setInvalidField}
                            name={'phone'}
                        />
                        <InputForm
                            label={'MẬT KHÂU'}
                            invalidFields={invalidFields}
                            value={payload.password}
                            setValue={setPayload}
                            setInvalidField={setInvalidField}
                            name={'password'}
                            type={'password'}
                        />
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
                                onClick={() => {
                                    setInvalidField([]);
                                    setRegister(false);
                                    setPayload({
                                        phone: '',
                                        password: '',
                                        name: '',
                                    });
                                }}
                            >
                                Đăng nhập ngay
                            </span>
                        </small>
                    ) : (
                        <>
                            <small className="text-[blue] hover:text-[red] cursor-pointer">Bạn quên mật khẩu</small>
                            <small
                                onClick={() => {
                                    setInvalidField([]);
                                    setRegister(true);
                                    setPayload({
                                        phone: '',
                                        password: '',
                                        name: '',
                                    });
                                }}
                                className="text-[blue] hover:text-[red] cursor-pointer"
                            >
                                Tạo tài khoản mới
                            </small>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Login;
