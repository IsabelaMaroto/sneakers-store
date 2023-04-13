import styled from '@mui/styled-engine-sc'
import {Header} from './components/header/header';
import { Main } from './components/main/mainContainer';
const Container = styled('div')`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
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
