
import React, {useEffect, useState} from "react"
import axios from "axios"
import TheCards from "./TheCards"
function CardList () {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`https://swapi.co/api/people/`)
        .then(response => {
            // console.log(response.data)
            setData(response.data.results)
        })
        .catch(err => console.log("Data not being transferred", err))

    }, [])
    
    console.log(data)
    return (
        <div>
            {/* <Two name = {data.name}/> */}
            {data.map((cv, index) => {
                return <TheCards 
                key = {index} 
                name = {cv.name} 
                eye = {cv.eye_color}
                mass = {cv.mass}
                gender = {cv.gender}
                birthyear = {cv.birth_year}/>
            })}
        </div>
    )
}
export default CardList