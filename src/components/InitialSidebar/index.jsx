import { Container } from './style'
import { api } from '../../services/api'


import locale from '../../assets/locale.svg'
import sunRain from  '../../assets/sun_rain.svg'
import { translateClimate } from '../utils/traslateClimate'
import { useContext , useEffect} from 'react'
import { ClimatesContext } from '../../Context'
import { translateFahrenheit } from '../utils/translateFahrenheit '

export function InitialSidebar({search, setSearch, res, req}){

      const {setDataWeather, setLocation, fahrenheit} = useContext(ClimatesContext)



     function handleModifySearch(){
         if(search){
             setSearch(false)
         }else{
             setSearch(true)
         }
     }



     function handleReturLocale(){
    
            navigator.geolocation.getCurrentPosition((position) => {
      
                getWeather(position.coords.latitude, position.coords.longitude)
               
      
                setLocation(true)
            })
          
      
          let getWeather = async (lat, long) => {
            /** pega o dados da api  */ 
              let res = await api.get(`search/?lattlong=${lat},${long}`)
      
              let req = await api.get(`${res.data[0].woeid}/`)     
              setDataWeather(req.data)
          }
     }


    return(
    <Container>
           <div className="search">
                <button onClick={handleModifySearch}> procurar lugares </button>
                <a onClick={handleReturLocale}> <img src={locale} alt="localização" /></a>  
           </div>

                <div  className="image"> 
                    <img src={`https://www.metaweather.com/static/img/weather/${res.weather_state_abbr}.svg`} alt="" />
                    <h1>
                    {translateFahrenheit(Math.round(res.the_temp), fahrenheit).replace('°c', "").replace('°f', "")}<span>{fahrenheit ? '°f' : '°c'}</span>
                    </h1>
                    <h2>{translateClimate(res.weather_state_name)}</h2>


                    <p> Hoje . {new Date(res.created).toLocaleDateString('pt-BR', { year: "numeric",
                     month: "short", day: "numeric" })} </p>
                    <p>{req.title}</p>
                </div>
                <div>

        </div>
    </Container>
    )
}