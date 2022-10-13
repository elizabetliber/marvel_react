import React from 'react';
import thor from "../../assets/thor.jpeg"

function LeftSide(props) {
    return (
        <div className="w-[550px] flex justify-between items-center px-[40px] py-[35px]">
            <img className="w-[180px] h-[180px] object-cover flex-shrink-0" src={thor} alt="thor" />
            <div className="grid text-black grid-rows-[90px_minmax(29px, auto)_38px] ml-8">
                <h3 className="font-bold text-[22px] leading-[26px] uppercase pb-3">Thor</h3>
                <p className="text-[14px] leading-4">As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate</p>
                 <div className="pt-[10px]">
                     <button>HOMEPAGE</button>
                     <button>WIKI</button>
                 </div>
            </div>
        </div>
    );
}

export default LeftSide;