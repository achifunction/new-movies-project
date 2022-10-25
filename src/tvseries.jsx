import data from "./data.json";
import './mobileHome.css';
import { Routes, Router } from "react-router-dom";

 const TVseries = () => {

    const filterDataTvserie = data.filter ((TVseries)   => TVseries.category === "TV Series" );

    return(
        <>
        <div className="mainconteiner">
                <div className='search'>
                    <img src={require("./assets/ShapeSearch.png")} />
                    <input placeholder="Search for movies or TV series" className="input" ></input>
                </div>

                <div className='head'>
                    <img src={require("./assets/logo.png")} />
                    <div className='categories'>
                        <img src={require("./assets/Shape.png")} />
                        <img src={require("./assets/ShapeMove.png")} />
                        <img src={require("./assets/ShapeTV.png")} />
                        <img src={require("./assets/Path.png")} />
                    </div>
                    <img src={require("./assets/Oval.png")} />
                </div>


                <h1>TV series</h1>f
                <div className="box2">
                    {
                        filterDataTvserie.map((movie) => {
                            return (
                                <>
                                    <div className='margin'>
                                        <img className="image" src={`${process.env.PUBLIC_URL + movie.thumbnail.regular.small}`} />
                                        <div className='info1'>
                                            <a>{movie.year}</a>
                                            <img src={require("./assets/OvalSmall.png")} />
                                            <img src={require("./assets/ShapeSmall.png")} />
                                            <a>{movie.category}</a>
                                            <img src={require("./assets/OvalSmall.png")} />
                                            <a>{movie.rating}</a>
                                        </div>
                                        <h2 className='h2'>{movie.title}</h2>

                                    </div>
                                </>

                            )
                        })
                    }
                </div>



            </div>
        </>
    )
 };


 export default TVseries;


