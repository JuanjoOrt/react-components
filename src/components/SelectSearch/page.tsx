import SelectSearch from "./SelectSearch";
import {useState} from "react";

export default function PageSelectSearch () {
  const [val, setVal] = useState()

  return (
    <div className='container'>
      <SelectSearch onChange={(e) => setVal(e)} value={val} />
    </div>
  )
}