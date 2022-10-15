import React, {Component} from 'react';
import MarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../../errorMessage/ErrorMessage";

class LeftSide extends Component {
    constructor(props) {
        super(props)
        this.updateChar()
    }

    state = {
        char: {},
        loading: true,
        error: false
    }

    marvelService = new MarvelService()

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true,
        })
    }

    updateChar = () => {
        const id = Math.floor(Math.random() * (1010789 - 1009146) + 1009146)
        this.marvelService
            .getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }


    render() {
        const {char: {name, description, thumbnail, homepage, wiki}, loading, error} = this.state;

        if (error) {
            return (
                <div className="w-[550px] flex justify-center items-center">
                    <ErrorMessage/>
                </div>
            )
        }

        if (loading) {
            return (
                <div className="w-[550px] flex justify-center items-center">
                    <Spinner/>
                </div>
            )
        }
        return (
            <div className="w-[550px] flex justify-between items-center px-[40px] py-[35px]">
                <img className="w-[180px] h-[180px] object-cover flex-shrink-0" src={thumbnail} alt="thor"/>
                <div className="grid text-black grid-rows-[90px_minmax(29px, auto)_38px] ml-8">
                    <h3 className="h-[29px] font-bold text-[22px]  leading-[26px] uppercase pb-3">{name}</h3>
                    <p className="text-[14px] leading-4 h-[90px]">{description}</p>
                    <div className="flex pt-[28px]">
                        <div>
                            <a href={homepage} className="button button__main">
                                <div className="inner">HOMEPAGE</div>
                            </a>
                        </div>
                        <div className="w-[101px] ml-8">
                            <a href={wiki} className="button button__secondary">
                                <div className="inner">WIKI</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default LeftSide;
