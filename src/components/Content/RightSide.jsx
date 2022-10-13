import React from 'react';
import loki from "../../assets/loki.jpg"
import ComicsList from "./ComicsList";

function RightSide() {
    return (
        <div className="flex flex-col w-[425px] h-[763px] text-black bg-white p-7 shadow-[0px_0px_20px_rgba(0,0,0,0.25)]">
            <div className="flex">
                <img src={loki} alt="" className="w-[150px] h-[150px]"/>
                <div className="flex flex-col justify-between text-black ml-6">
                    <h2 className="text-[22px] justify-between font-bold">LOKI</h2>
                    <div className="space-y-3">
                        <div>
                            <a href="#" className="button button__main">
                                <div className="inner">homepage</div>
                            </a>
                        </div>
                        <div>
                            <a href="#" className="button button__secondary">
                                <div className="inner">Wiki</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-sm not-italic mt-4 w-[375px]">In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the
                brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir,
                and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the
                stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse
                Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.
            </p>
            <h3 className="text-lg font-bold mt-6">Comics:</h3>
            <div>
                <ComicsList/>
            </div>
        </div>
    );
}

export default RightSide;