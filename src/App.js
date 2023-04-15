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

  
 
  
  function Plus(){
   setValue(value => value + 1)
  }
  function Minus(){
    if(value > 0){
      setValue(value => value - 1)
    }
  }
  function ProductData(){
    setValueTotal(value)
  }
  return (
    <Container className="App">
      <Header valueTotal={valueTotal} setValueTotal={setValueTotal} setValue={setValue}/>
      <Main Minus={Minus} Plus={Plus} value={value} ProductData={ProductData}/>
    </Container>
  );
}

export default App;
