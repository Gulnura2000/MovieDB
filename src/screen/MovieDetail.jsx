import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../component/Header"

const MovieDetail = () => {
    const [detail, setdetail] = useState()
    const [video, setvideo] = useState()
    const [similar, setsimilar] = useState()
    const [recomendate, setrecomen] = useState()
    let apikey = '3cc05ada7e70628b8d1bf36e4d1f6fd7&'
    let param = useParams()
    let deteiF = async () => {

        let detData = await axios({
            url: `https://api.themoviedb.org/3/movie/${param.id}?api_key=${apikey}&language=ru-RU&page=1`
        })
        console.log(detData, 'hekki');
        if (detData != null) {
            if (detData.status == 200) {
                setdetail(detData.data)
            }
        }

    }
    let videiF = async () => {
        let videtData = await axios({
            url: `https://api.themoviedb.org/3/movie/${param.id}/videos?api_key=${apikey}&language=ru-RU`
        })
        if (videtData != null) {
            if (videtData.status == 200) {
                setvideo(videtData.data.results)
            }
        }
    }
    let similarF = async () => {
        let similarData = await axios({
            url: `
            https://api.themoviedb.org/3/movie/${param.id}/similar?api_key=${apikey}&language=ru-RU&page=1`
        })
        if (similarData != null) {
            if (similarData.status == 200) {
                setsimilar(similarData.data.results)
            }
        }
    }
    let recomen = async() => {
        let recomenData = await axios({
            url:`https://api.themoviedb.org/3/movie/${param.id}/recommendations?api_key=${apikey}&language=ru-RU&page=1`
        })
        if(recomenData != null){
            if(recomenData.status == 200){
                setrecomen(recomenData.data.results)
            }
        }
    }
 
    useEffect(() => {
        deteiF();
        videiF();
        similarF();
        recomen();
    }, [])

    return (
        <div>
            <Header/>
            <div className="col-lg-11 mx-auto">
                <div className="row mt-5 ">
                <div className="col-lg-10 px-5 ">
                    <div className="row">
                        {detail != null ? <>
                            <div className="col-lg-6">
                                <img width={'90%'} height={'600px'} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${detail.backdrop_path}`} alt="" />
                            </div>
                            <div className="col-lg-4">
                                <h4> {detail.title} </h4>
                                <p>{detail.overview}</p>
                                <h6>{detail.popularity}</h6>
                                <h6> {detail.release_date}</h6>
                                <p> <h6> производственные компании : </h6>

                                    {detail.production_companies
                                        .map(i => <>
                                            <img width={'50px'} className="rounded-5" height={'50px'} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${i.logo_path}`} alt="" />
                                            <span> {i.name} </span> <br /> <br />
                                        </>)}
                                </p>

                            </div>

                        </> : 'loading'}

                    </div> <br /> <br /> <br />

                    {video != null ?
                        video.map(i =>
                            <>
                            
                                <div className="col-lg-12">
                                    
                                    <iframe width="100%" height="800" src={`https://www.youtube.com/embed/${i.key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>


                            </>) : <>loading</>}



                </div>
                <div className="col-lg-2 similarblock text-center ">
                <h5>похожие фильмы</h5>
                    {similar != null ?
                        similar.map(i =>
                            <>
                                <img width={'100%'} height={'280px'} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${i.poster_path}`} alt="" /> <br /> <br />

                                <a href={"/detail/" + i.id}><h5>{i.title}</h5></a>
                                <p>{i.release_date}</p>
                            </>) : <> loading </>}
                </div>
            </div> 
            <h4 className="mx-3 my-3 "  > Рекомендации</h4>
            <div className="col-lg-12 scrollHome  text-center">    
                {recomendate != null ?
                    recomendate.map(i =>
                        <>
                      
                        <div className="col-6 col-md-4 bg-light p-2 mx-2 block mt-3 mb-1 col-lg-2">
                              <img width={'90%'} height = {'280px'} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${i.poster_path}`} alt="" /> <br /> <br />
    
                              <a href={"/detail/"+i.id}><h5>{i.title}</h5></a>  
                            <p>{i.release_date}</p>
                        </div>
                          
                        </>

                    ) : <>loading</>}
</div>
            </div>
           

        </div>
    )
}

export default MovieDetail