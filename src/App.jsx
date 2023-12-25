import { useState } from 'react'
import './App.css'
import ButtonGroup from './components/buttonGroup/ButtonGroup'
import Display from './components/display/Display'

function App() {

  const [displayValue, setdisplayValue] = useState('')

  const btnHandler = (buttonData) => {
    switch (buttonData) {
      case 'AC':
        setdisplayValue((prev) => prev = '')
        break;

      case '=':
        console.log(displayValue);
        if (displayValue != '') {
          setdisplayValue((prev) => eval(prev))
        }
        break
      default:
        setdisplayValue((prev) => displayValue + buttonData)
        break;
    }
  }
  return (
    <>
      <div className='calender'>
        <Display displayValue={displayValue} />

        <div className='calculateButton'>
          <ButtonGroup btnHandler={btnHandler} />
        </div>
      </div>
    </>
  )



}

export default App
