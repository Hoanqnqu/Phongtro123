import React from 'react';
import { text } from '~/ultils/dataIntro';
import icons from '~/assets/icons';
import Button from './Button';

const { GrStar } = icons;
const star = [1, 2, 3, 4, 5];
const Intro = () => {
    return (
        <div className="w-3/5 bg-white rounded-md p-4 shadow-md flex flex-col gap-4 justify-center items-center  ">
            <h3 className="font-bold text-lg">{text.title}</h3>
            <p className="text-gray-800 text-center my-4">{text.description}</p>
            <div className="flex items-center justify-around w-full">
                {text.statistic.map((item, index) => {
                    return (
                        <div className="flex flex-col justify-center items-center" key={index}>
                            <h4 className="font-bold text-lg">{item.value}</h4>
                            <p className="text-gray-700">{item.name}</p>
                        </div>
                    );
                })}
            </div>
            <h3 className="font-bold text-lg py-2">{text.price}</h3>

            <div className="flex justify-center items-center py-2">
                {star.map((item) => {
                    return (
                        <span key={item}>
                            <GrStar size={24} color="yellow" />
                        </span>
                    );
                })}
            </div>
            <p className="text-gray-600 italic text-center"> {text.comment}</p>
            <span className="text-gray-700">{text.author}</span>
            <h3 className="font-bold text-lg py-2">{text.question}</h3>
            <p>{text.answer}</p>
            <Button text={'Đăng tin ngay'} bgColor="bg-secondary2" textColor="text-white" />
            <div className="h-12"> </div>
        </div>
    );
};

export default Intro;
