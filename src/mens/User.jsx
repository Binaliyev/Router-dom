import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"

export const User = () =>{
    const {id} = useParams()
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(response => setData([response.data]))
    })
    return(
        <>
        {data?.map((item) => {
            return(
                <h1 key={item.name}>{item.name}</h1>
            )
        })}
        </> 
    )
}