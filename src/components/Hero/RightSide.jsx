import React, {Component} from 'react';
import Decoration from "../../assets/Decoration.png"

class RightSide extends Component {
    // state = {
    //     name: null,
    //     description: null,
    //     thumbnail: null,
    //     homepage: null,
    //     wiki: null
    // }

    render() {
        // const {name, description, thumbnail, homepage, wiki} = this.state;
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
                <div className="w-[101px] pt-5">
                    <a href="#" className="button button__main">
                        <div className="inner">Try it</div>
                    </a>
                </div>

                <div className="absolute w-[202px] h-[189px] bottom-2.5 -right-8">
                    <img src={Decoration} alt="decor"/>
                </div>
            </div>
        );
    }
}

export default RightSide;