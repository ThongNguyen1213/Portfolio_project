import React from 'react';
import { avatar } from '../assets';

const Introduction = () => (
    <div className="w-full px-10 py-10 flex flex-col justify-around md:flex-row">
        <div className= "flex flex-row justify-center">
            <h1 className="font-orbitron relative w-[420px] h-[200px] pt-10 text-[24px] flex-row text-white"> Hi. My name is <span className="font-orbitron font-semibold text-brightYellow">Thong M. Nguyen </span> and I'm a website front-end developer.
            </h1>
        </div>

        <div className="z-[5] mx-20 " >
            <img src={avatar}
                 alt="portrait"
                 className="w-[300px] rounded-full "/>
        </div>
    </div>
    
)


export default Introduction