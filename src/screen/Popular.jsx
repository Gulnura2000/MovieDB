import React from 'react';
import { useState } from "react";
import axios from 'axios';
import { useEffect } from "react";
import Sonnet from '../component/Sonnet';
import Header from '../component/Header';
import { Skeleton } from 'antd';

const PopularMovie = () => {
    const [movie1, setmovie1] = useState()
    const [movie, setmovie] = useState(null)
    let [state, setsate] = useState(false)
    let movieF1 = async () => {
        let movieData = await axios({
            url: `https://api.themoviedb.org/3/movie/popular?api_key=3cc05ada7e70628b8d1bf36e4d1f6fd7&language=ru-RU&page=1`,
            method: "get"
        })
        if (movieData != null) {
            if (movieData.status == 200) {
                setmovie1(movieData.data.results)

            }
        }
        console.log(movieData);
    }

    let movieF = async (el) => {
        let movieData = await axios({
            url: `https://api.themoviedb.org/3/movie/popular?api_key=3cc05ada7e70628b8d1bf36e4d1f6fd7&language=ru-RU&page=${el}`,
            method: "get"
        })
        if (movieData != null) {
            if (movieData.status == 200) {
                setmovie(movieData.data.results)
                setsate(
                    true
                )
            }
        }
        console.log(movieData);
    }
    console.log(movie1, 'kk');
    useState(() => {
        movieF1()
    }, [])


    return (
        <div>
            <Header />
            <div data-aos="zoom-out" className="  col-11 col-md-11 mt-5 text-center mx-auto ">

                <button onClick={() => movieF(2)} className='btn btn-outline-warning  mx-1   mx-md-2 mx-lg-3  ' >2</button>
                <button onClick={() => movieF(4)} className='btn btn-outline-warning  mx-1 mx-md-2 mx-lg-3 ' >4</button>
                <button onClick={() => movieF(5)} className='btn btn-outline-warning mx-1  mx-md-2 mx-lg-3 ' >5</button>
                <button onClick={() => movieF(3)} className='btn btn-outline-warning  mx-1 mx-md-2 mx-lg-3 ' >3</button>
                <button onClick={() => movieF(6)} className='btn btn-outline-warning  mx-1 mx-md-2 mx-lg-3 ' >6</button>
                <button onClick={() => movieF(7)} className='btn btn-outline-warning mx-1  mx-md-2 mx-lg-3 ' >7</button>
            </div>

            <div className="col-11 mx-auto popular ">
                {state ?
                    <div data-aos="zoom-out" className="col-lg-11 text-center mx-auto ">
                        <div className="row">
                            {movie != null ?
                                movie.map(i =>
                                    <>
                                        
                                            <div className="col-5 col-md-4 block my-5 col-lg-2">
                                            <a href={"/detail/"+i.id}>
                                                <img width={'80%'} height={'280px'} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${i.poster_path}`} alt="" />
                                                <h6>{i.title}</h6>
                                                </a>
                                            </div>

                                    </>

                                ) : <><Skeleton active /></>}
                            <div className="col-3">

                            </div>
                        </div>
                    </div> :
                    <div data-aos="zoom-out" className="col-lg-11 text-center mx-auto ">
                        <div className="row  ">
                            {movie1 != null ?
                                movie1.map(i =>
                                    <>
                                       
                                            <div className="col-5 block col-md-4  my-5 col-lg-2">
                                            <a href={"/detail/"+i.id}>
                                                <img width={'80%'} height={'300px'} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${i.poster_path}`} alt="" /> <br /> <br />

                                                <h6>{i.title}</h6>   </a>
                                            </div>
                                     
                                    </>

                                ) : <><Skeleton active /></>}

                        </div>
                    </div>}
            </div>
        </div>

    )
}

export default PopularMovie