import React from 'react';
import { useState } from "react";
import axios from 'axios';
import { useEffect } from "react";
const Sonnet = ()=>{
    const [movie, setmovie] = useState()
    let movieF = async () => {
        let movieData = await axios({
            url: 'https://api.themoviedb.org/3/movie/popular?api_key=3cc05ada7e70628b8d1bf36e4d1f6fd7&language=ru-RU&page=1',
            method: "get"
        })
        if (movieData != null) {
            if (movieData.status == 200) {
                setmovie(movieData.data.results)
            }
        }
        console.log(movieData);
    }

    useEffect(() => {
        movieF()
    }, [])
    return(
        <>
           <div className="col-lg-11 text-center mx-auto ">
            <div className="row">
                {movie != null ?
                    movie.map(i =>
                        <>
                        <div className="col-6 col-md-4 border border-secondary my-5 col-lg-3">
                              <img width={'50%'} height = {'300px'} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${i.poster_path}`} alt="" />
                            <h5>{i.title}</h5>
                        </div>
                          
                        </>

                    ) : <>loading</>}
                <div className="col-3">

                </div>
            </div>
        </div>
        
        </>
    )
}

export default Sonnet