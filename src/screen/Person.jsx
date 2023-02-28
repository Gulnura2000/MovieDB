import axios from "axios"
import { useEffect, useState } from "react"
import Header from "../component/Header"

const Person = () => {
    const [person, setperson] = useState()
    // const [loading,setLoading] = useState(false)
    let apikey = '3cc05ada7e70628b8d1bf36e4d1f6fd7&'
    let personF = async () => {
        // setLoading(true)
        let personData = await axios({
            url: `https://api.themoviedb.org/3/person/popular?api_key=${apikey}&language=en-US&page=1`
        })

        if (personData != null) {
            console.log(personData, 'kkk');
            setperson(personData.data.results)
            // setLoading(false)
        }
    }
    useEffect(() => {
        personF()
    })
    return (
        <div>
            <Header />
            <div className=" col-11 col-md-11 col-lg-10 mx-auto " >
                <div className="row">
                    {person != null ? person.map(i => <>

                        <div className="col-5 person col-md-4 col-lg-2 mx-3 my-4  block ">
<a href={"/persondetail/" + i.id}>
                            <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${i.profile_path}`} width={'100%'} alt="" />
                            <h5 className="my-2" > {i.name} </h5></a>
                        </div>
                        
                    </>) : <></>}
                </div>
            </div>
        </div>
    )
}

export default Person