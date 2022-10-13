import React from 'react';
import Decoration from "../../assets/Decoration.png"

function RightSide() {
    return (
        <div className="w-[550px] bg-[#232222] px-[40px] py-[35px] relative">
            <p className="text-[24px] font-bold">
                Random character for today!
            </p>
            <p className="text-[24px] font-bold">
                Do you want to get to know him better?
            </p>
            <p className="text-[24px] font-bold pt-5">
                Or choose another one
            </p>
            <button className="pt-5">TRY IT</button>
            <div className="absolute w-[202px] h-[189px] bottom-2.5 -right-8">
                <img src={Decoration} alt="decor"/>
            </div>
        </div>
    );
}

export default RightSide;