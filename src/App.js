import styled from '@mui/styled-engine-sc'
import {Header} from './components/header/header';
import { Main } from './components/main/mainContainer';
import { useState } from "react";


const Container = styled('div')`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

function App() {
  const [value, setValue] = useState(0);

  const [valueTotal, setValueTotal] = useState(0);

  
  function ProductData(){
    setValueTotal(value)
  }
  return (
    <Container className="App">
      <Header valueTotal={valueTotal} setValueTotal={setValueTotal} setValue={setValue}/>
      <Main  value={value} ProductData={ProductData} setValue={setValue}/>
    </Container>
  );
}

export default App;
