import styled from '@mui/styled-engine-sc'
import {Header} from './components/header/header';
import { Main } from './components/main/mainContainer';
const Container = styled('div')`
  
`

function App() {
  return (
    <Container className="App">
      <Header/>
      <Main/>
    </Container>
  );
}

export default App;
