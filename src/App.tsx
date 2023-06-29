import SelectSearch from './components/SelectSearch/SelectSearch'
import { useState } from 'react'

function App() {
  const [val, setVal] = useState()

  return (
    <>
      <div style={{ width: '100%' }}>
        <SelectSearch onChange={(e) => setVal(e)} value={val} />
      </div>
    </>
  )
}

export default App
