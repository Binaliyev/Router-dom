import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const Users = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(response => {
            if (response.status === 200) {
                setData(response.data)
            }
        })
    }, [])
    return(
        <div className="my-5">
        {data?.map((item) => {
            return(
                <Link key={item.id} className="d-block mx-5 my-1" to={`/user/${item.id}`}>{item.name}</Link>
            )
        })}
        </div>
    )
}