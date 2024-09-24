import { TextField, Stack, Button } from '@mui/material'
import './App.css'
import { useState } from 'react'


function App() {

  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [interest, setInterest] = useState(0)

  const [invalidPriciple, setInvalidPrinciple] = useState(false)
  const [invalidRate, setInvalidRate] = useState(false)
  const [invalidYear, setInvalidYear] = useState(false)

  const userInputValidate=(inputTag)=>{
    const {name,value}=inputTag
    // console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    console.log(!!value.match(/^\d*\.?\d+$/));
    if(name=="principle"){
      setPrinciple(value)
      !!value.match(/^\d*\.?\d+$/) ? setInvalidPrinciple(false) :setInvalidPrinciple(true)
    }
    if(name=="rate"){
      setRate(value)
      !!value.match(/^\d*\.?\d+$/) ? setInvalidRate(false): setInvalidRate(true)
    }
    if(name=="year"){
      setYear(value)
      !!value.match(/^\d*\.?\d+$/) ? setInvalidYear(false):setInvalidYear(true)
    }
  }
const handleCalculate=()=>{
  if(principle && rate && year){
    setInterest(principle*rate*year/100)
  }else{
    alert('please fill the form completely!!')
  }
}
const handleReset=()=>{
  setPrinciple(0)
  setRate(0)
  setYear(0)
  setInterest(0)
  setInvalidPrinciple(false)
  setInvalidRate(false)
  setInvalidYear(false)
  
}
  return (
    <div style={{ minHeight: '100vh' }} className='bg-dark d-flex justify-content-center align-items-center'>

      <div style={{ width: '600px' }} className='bg-light rounded p-3'>
        <h3 className=''>Simple Interest Calculator</h3>
        <p>
          Calculate your simple Interest easily!
        </p>
        <div className="text-center bg-danger shadow text-light p-3 rounded">
          <h1>₹ {interest}</h1>
          <p className='fw-bolder'>Total Simple Interest</p>
        </div>
        <form className="mt-4">
          <div className="mb-3"><TextField value={principle || ""} onChange={e=>{userInputValidate(e.target)}} name='principle' className='w-100' id="outlined-principle" label="₹ Principle Amount" variant="outlined" /></div>
          {
            invalidPriciple && <div className="text-danger fw-bolder mb-3">*Invalid Principle Amount</div>

          }
          <div className='mb-3'><TextField value={rate || ""} onChange={e=>{userInputValidate(e.target)}} name='rate' className='w-100' id="outlined-rate" label="Rate of Interest (%)" variant="outlined" /></div>
          {
            invalidRate && <div className="text-danger fw-bolder mb-3">*Invalid Interest Rate</div>

          }
          <div className='mb-3'><TextField value={year || ""} onChange={e=>{userInputValidate(e.target)}} name='year' className='w-100' id="outlined-year" label="Time Period (yr)" variant="outlined" /></div>
          {
            invalidYear && <div className="text-danger fw-bolder mb-3">*Invalid Year</div>

          }
          <Stack direction="row" spacing={2}>
            <Button onClick={handleCalculate} disabled={invalidPriciple || invalidRate || invalidYear} style={{ width: '50%', height: '60px' }} className='bg-dark' variant="contained">Calculate </Button>
            <Button onClick={handleReset} style={{ width: '50%', height: '60px' }} className='border border-dark text-dark' variant="outlined">Reset</Button>
          </Stack>
        </form>
      </div>
    </div>
  )
}

export default App