import { useState, useEffect } from 'react'
import axios from 'axios'
import { CLIENT_URL } from '../services/constants'
import Header from './Header'


function StarShips() {
    const [starships, setStarships] = useState([])

   useEffect(() => {
       const fetchData = async () => {
           try {
               const response = await axios.get(`${CLIENT_URL}`)
                console.log(response)
               const { results} = response.data;
               console.log(results)
               setStarships(results)
           } catch (error) {
               console.log(error)
           }
       }
       fetchData()
   },[])

return(
    <div className="startship">
    {
       starships.map((starship, index) => {
       const { name } = starship
       return (
       <Header  name= {name} key={index} />
       )
    })
    }
    </div>
)

}

export default StarShips