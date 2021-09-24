import { Container } from "./style";
import SunRainDays from '../../assets/sun_rain_days.svg'
import { useContext, useState } from "react";
import { ClimatesContext } from "../../Context";
import { translateFahrenheit } from "../utils/translateFahrenheit ";


export function ClimaDay({element}) {
   
   
    var dataFinal = new Date(`${element.applicable_date} 21:01:28 GMT-0300`)
    const {fahrenheit} = useContext(ClimatesContext)

    const [semana , setSemana] = useState(["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira" ,"Sexta-Feira", "Sábado" ])
    return(
       
    <Container>
        <p>{semana[dataFinal.getDay()]}</p>
        <img src={`https://www.metaweather.com/static/img/weather/${element.weather_state_abbr}.svg`} alt="" />
        <p>
          <span>{translateFahrenheit(Math.round(element.max_temp), fahrenheit)}</span>
          <span>{translateFahrenheit(Math.round(element.min_temp) , fahrenheit) }</span>
        </p>
      </Container>
    )
}