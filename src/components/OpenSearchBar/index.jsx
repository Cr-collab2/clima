import { useContext, useState } from "react";
import { ClimatesContext } from "../../Context";
import { Container } from "./style";
import { HistorySearch} from "../HistorySearch";

import { FiX} from 'react-icons/fi'


export function OpenSearchBar({setSearch}){
    const {searchLocalWeather } = useContext(ClimatesContext)

    const [modifyLocale, setModifyLocale] = useState("")
    


     const [recuperationHisorySearch , setRecuperationHisorySearch] = useState(()=>{
       
            const historySearch2 = localStorage.getItem('@History:search');
        
            if (historySearch2) {
              return JSON.parse(historySearch2);
            }
            return [];
         
     })

     var historySearch = [...recuperationHisorySearch]



    function handleWeatherCity(){ 
        searchLocalWeather(modifyLocale) 

        historySearch.push(modifyLocale)   
        setRecuperationHisorySearch(historySearch)
        
        localStorage.setItem('@History:search', JSON.stringify(historySearch))
        setModifyLocale("");
    }
    return(
        <Container>
               <button className="close" onClick={()=> setSearch(false)}> <FiX size="20"/> </button>
               <br />
            
              <input 
              type="text" 
              value={modifyLocale}
              onChange={(event)=>setModifyLocale(event.target.value) }
              placeholder="Pesquise sua localização" />  

              <button className="search" onClick={handleWeatherCity}>Pesquise</button>
   
                {
                    recuperationHisorySearch.map((history)=>{ 
                        return <HistorySearch history={history}/>
                    })
                }  
           
        </Container>
    )
}