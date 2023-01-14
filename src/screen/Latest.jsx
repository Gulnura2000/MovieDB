import axios from "axios"
import { useEffect } from "react"

const LatestMovie = ()=>{
    let apikey = '3cc05ada7e70628b8d1bf36e4d1f6fd7&'
    let LatestF = async()=>{
        let LatestData = await axios({
            url:`https://api.themoviedb.org/3/movie/latest?api_key=${apikey}&language=ru-RU`,
            method: 'get'

        })
        console.log(LatestData , "gu");
    }

    useEffect(()=>{
        LatestF()
    })
    return(
        <div>
<h1>log</h1>
        </div>
    )
}
export default LatestMovie