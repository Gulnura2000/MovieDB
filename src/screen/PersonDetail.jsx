import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../component/Header";
import { Skeleton } from 'antd';
const PersonDetail = ()=>{
    const [person , setperson] = useState()
    const [ credits , setcredits ] = useState()
    let apikey = '3cc05ada7e70628b8d1bf36e4d1f6fd7&'
let param = useParams()

    let personItemF = async()=>{
        let personData = await axios({
            url:`https://api.themoviedb.org/3/person/${param.id}?api_key=${apikey}&language=en-US` 
        })
        

        if(personData != null ){
            setperson(personData.data)
        }
    }
    let credisF = async()=>{
        let creditsData = await axios({
            url:`https://api.themoviedb.org/3/person/${param.id}/movie_credits?api_key=${apikey}&language=ru-RU`
        }) 
        console.log(creditsData)
        setcredits(creditsData.data.cast)
    }
useEffect(()=>{
    personItemF()
    credisF()
})
    return(
<div>
<Header/>
{ person != null ? <>
<div className="col-11 mx-auto mt-3 ">
    <div className="row">
        <div className="col-md-4 personitem">
        <img width={'90%'} height = {'480px'} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${person.profile_path}`} alt="" /> <br /> <br />
       <b>Дата рождения <br />
       {person.birthday}</b>
<br /> <br />
       <b> Также известность как </b>
        { person.also_known_as.map(i =>
             <> <p> {i} </p> </>
             
             ) }

        </div>
        
        <div className="col-md-8 my-auto fs-5 ">
            <h3> {person.name} </h3>
            <p>{person.biography}</p>

            <h3>Известность за</h3>
            <div className="row scrollHome ">
                
            { credits != null ? 
            credits.map(i => <>
  
     <div className="col-6 col-md-5 text-senter block my-5 col-lg-3">
         <a href={"/detail/" + i.id}>
       <img width={'80%'} height={'300px'} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${i.poster_path}`} alt="" />
     <h6>{i.title}</h6></a>
        </div>

 </> ) : <>
 <Skeleton active /></> }
            </div>
        </div>
    </div>
    <br /> <br />
    
    
</div>



</> : <><Skeleton active /></> }

</div>
    )
}

export default PersonDetail