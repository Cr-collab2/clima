
import {useEffect, useState} from 'react'


import { createContext } from 'react';
import { initialState } from '../data/data';


import {api} from '../services/api'


export const ClimatesContext = createContext({})


export function ClimatesProvider({children}){

   const [location, setLocation] = useState(false)
  /**  verifacção da localização do usuarios  */

  const [dataWeather, setDataWeather] = useState(initialState)
  /** localidade mais proxima baseada na latitude e long */

  const [fahrenheit , setFahrenheit ] = useState(false)


    useEffect(()=> {
      navigator.geolocation.getCurrentPosition((position) => {

          getWeather(position.coords.latitude, position.coords.longitude)
         

          setLocation(true)
      })
    }, []) 
    

    let getWeather = async (lat, long) => {
      /** pega o dados da api  */ 
        let res = await api.get(`search/?lattlong=${lat},${long}`)

        let req = await api.get(`${res.data[0].woeid}/`)     
        setDataWeather(req.data)
    }
  
  


  const searchLocalWeather = async (name) =>{
    let res = await api.get(`search/?query=${name}`)

    let req = await api.get(`${res.data[0].woeid}/`)   
    setDataWeather(req.data)
  } 

    return(
        <ClimatesContext.Provider  value={{dataWeather ,
         setDataWeather,
          setLocation, 
          searchLocalWeather,
           fahrenheit,
           setFahrenheit}}>
            {children}
        </ClimatesContext.Provider>
    )
}

