import React from "react"
import { useState,useEffect } from "react"



export const AllMenuContext = React.createContext()

 export const AllMenus =(props)=>{
    let [menu,setMenu] = useState([])
    let [loading,setLoading] = useState(false)
    async function getAllTheMenu(){
        setLoading(true)
        const API_URL = "https:/www.themealdb.com/api/json/v1/1/search.php?f=c"
        let response = await fetch(API_URL)
        let data = await response.json()
        setMenu(data.meals)
        setLoading(false)
    }
    useEffect(()=>{ 
        getAllTheMenu()
   },[])

    return(
     <AllMenuContext.Provider value={menu}>
           {!loading?props.children:<h2>Loading....</h2>}
     </AllMenuContext.Provider>
    )
}

