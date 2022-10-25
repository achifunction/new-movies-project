import data from "./data.json";
import './mobileHome.css';
import { Routes, Router } from "react-router-dom";


const Movies = () => {


    const filterDataMovie = data.filter( (movie) => movie.category === "Movie")



    return (
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


                <h1>Movies</h1>f
                <div className="box2">
                    {
                        filterDataMovie.map((movie) => {
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
}

export default Movies;