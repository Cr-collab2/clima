import { useContext } from "react";
import { ClimatesContext } from "../../Context";
import { Container } from "./style";

export function HistorySearch({history}) {
 
  const {searchLocalWeather}  = useContext(ClimatesContext)
  
  function handleRePesquise(history){
          searchLocalWeather(history.target.innerText)
  }

  return(
    <Container onClick={(history)=>{ return handleRePesquise(history)}}>  {history}  </Container>
  )
}