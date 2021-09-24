import { Container } from "./style"
import { FiArrowUp } from "react-icons/fi";

export function ContentHighlights({name, value ,type, vento , wind_direction}){
   
    return(
        <Container>
        <p>
        {name}
        </p>
        <h1>
            {Math.round(value)}<span>{type}</span>
        </h1>
          {type === "mph" ? 
              (
                  <>
                   <p> {vento} <FiArrowUp className='icone' size="17" style={{transform:`rotate(${wind_direction}deg)`}}  /></p> 
                  </>
              )  :  type === '%' ? (
                  <>
                
              <div> <span>0%</span> <progress value={Math.round(value)} max="100" ></progress> <span>100%</span></div>
                    
                  </>
              ) : ""
        }
      </Container>

    )
}