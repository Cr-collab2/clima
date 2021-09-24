import {Container} from './style'
import locale from '../../assets/locale.svg'
import sunRain from  '../../assets/sun_rain.svg'
import { OpenSearchBar } from '../OpenSearchBar'
import { useContext, useState } from 'react'
import { InitialSidebar } from '../InitialSidebar'
import { ClimatesContext } from '../../Context'
export function Sidebar(props){

  const [search, setSearch] = useState(false)

    const {dataWeather} = useContext(ClimatesContext)

    const res = dataWeather.consolidated_weather[0] 


  return(
        <Container>
          <div className="content">

            {
              search ?
              <OpenSearchBar setSearch={setSearch}/>:
              <InitialSidebar search={search} setSearch={setSearch} res={res} req={dataWeather}/>

            }
          


          </div>
        </Container>
  )
}
