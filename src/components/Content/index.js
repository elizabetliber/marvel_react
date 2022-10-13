import React from 'react';
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

function Hero(props) {
    return (
        <div className="flex mt-12">
            <LeftSide/>
            <RightSide/>
        </div>
    );
}

export default Hero;