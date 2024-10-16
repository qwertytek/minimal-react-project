import './App.css'
import { useState } from "react";
import Button from '@mui/material/Button';

function App() {
  const [counter, setCounter] = useState<number>(0);
  return (
    <>
      <h1>
        Hello World
      </h1>

      <div className='counter-container'>
          <Button
            onClick={() => setCounter(counter-1)}
            variant="contained"
            color="primary"
          >
            -
          </Button>
          <h2 className='counter-value'>
            {counter}
          </h2>
          <Button
            onClick={() => setCounter(counter+1)}
            variant="contained"
            color="primary"  
          >
            + 
          </Button>
        </div>
    </>
  )
}

export default App
