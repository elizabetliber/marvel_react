import React from 'react';
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

function Hero() {
    return (
        <div className="flex shadow-[5px_5px_20px_rgba(0,0,0,0.25)] mt-12">
            <LeftSide/>
            <RightSide/>
        </div>
    );
}

export default Hero;