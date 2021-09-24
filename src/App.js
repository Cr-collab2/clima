import styled from 'styled-components'

import { GlobalStyle } from './styles/global'

import { Sidebar } from './components/Sidebar'
import { Content } from './components/Content'


import { ClimatesProvider } from './Context'

function App() {

  return (
    < ClimatesProvider>
    <Container>
      <Sidebar />
      <Content />
      <GlobalStyle />
    </Container>
    </ClimatesProvider>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;


  /* Mobile */

  
  @media (width: 375px) { 

     display: grid;
     height: auto;
     grid-template-areas:
     "sidebar"
     "content" ;

          
        }

`

export default App
