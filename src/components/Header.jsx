import React from 'react';

function Header() {
    return (
        <div className="font-bold text-[28px] text-black pt-[50px] flex justify-between items-center">
            <p><span className="text-[#9F0013]">Marvel</span> information portal</p>
            <div className="flex justify-between items-center text-[24px]">
                <p className={0 ? "text-[#9F0013]" : "text-black"}>Characters</p>
                <p className="px-2">/</p>
                <p className={1 ? "text-[#9F0013]" : "text-black"}>Comics</p>
            </div>
        </div>
    );
}

export default Header;