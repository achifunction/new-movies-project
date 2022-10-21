
import data from "./data.json"
import './mobileHome.css'
import { Splide, SplideSlide } from "@splidejs/react-splide"

const Mobilehome = () => {
    return (

        <div>
            <div className="mainconteiner">
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
                <div className='search'>
                    <img src={require("./assets/ShapeSearch.png")} />
                    <input placeholder="Search for movies or TV series" className="input" ></input>
                </div>
                <h1  >Trending</h1>
                <div className='containerSlider'>
                    <Splide aria-aria-label="mySlider"
                        options={{
                            fixedWidth: 700,
                            autoplay: true,
                            type: 'loop',
                            perMove: 1,
                            interval: 2000,
                            pagination: false,
                            arrows: false,
                            direction: "ltr",
                            pauseOnFocus: true,
                            pauseOnHover: true,
                            start: 2,
                            gap: 70,
                            breakpoints: {
                                1920: {
                                    fixedWidth: 600,
                                    gap: 60,
                                },
                                1440: {
                                    fixedWidth: 400,
                                    gap: 30,
                                },
                                768: {
                                    fixedWidth: 240,
                                    gap: 16,
                                },
                            },
                        }}
                        aria-label="Trending Movies"
                        className='slider'>

                        {
                            data.map((sliderMovie) => {
                                if (sliderMovie.isTrending) {
                                    return (
                                        <SplideSlide className='BeyondEarth'>
                                            <div className="childSlider" style={{ 'height': '100%', 'backgroundImage': `url(${process.env.PUBLIC_URL + sliderMovie.thumbnail.trending.small})` }}>
                                                <div className='info' >

                                                    <a>{sliderMovie.year}</a>
                                                    <img src={require("./assets/OvalSmall.png")} />
                                                    <img src={require("./assets/ShapeSmall.png")} />
                                                    <a>{sliderMovie.category}</a>
                                                    <img src={require("./assets/OvalSmall.png")} />
                                                    <a>{sliderMovie.rating}</a>
                                                </div>
                                                <h2 className='sliderh2'>{sliderMovie.title}</h2>
                                            </div>
                                        </SplideSlide>

                                    )
                                }
                            })
                        }
                    </Splide>
                </div>
                <h1>Recommended for you</h1>
                <div className="box2">
                    {
                        data.map((movie) => {
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
        </div>
    )





}
export default Mobilehome;