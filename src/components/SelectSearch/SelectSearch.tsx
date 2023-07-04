import './styles-select-search.scss'
import { useEffect, useRef, useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

type Option = {
  id: number,
  name: string
}

const options: Option[] = [
  {id: 1, name: 'Madrid'},
  {id: 2, name: 'Sevilla'},
  {id: 3, name: 'Malaga'},
]

interface Props {
  value: Option,
  onChange: (Option) => void
}

export default function SelectSearch ({ value, onChange }: Props) {
  const [showSelector, setShowSelector] = useState(false)
  const [inputSearch, setInputSearch] = useState('')
  const [ optionsArray, setOptionsArray ] = useState( options || [] )
  const inputRef = useRef<any>()
  const selectorRef = useRef<any>()

  useEffect(() => {
    if (value) setInputSearch(value.name)
  }, [value])

  useEffect(() => {
    const closeSelector = (e: MouseEvent) => {
      const elementClicked = e.composedPath().find((element) => inputRef.current === element)
      if (!elementClicked) setShowSelector(false)
    }

    if (showSelector) document.addEventListener('click', closeSelector)
    return () => document.removeEventListener('click', closeSelector)
  }, [showSelector])

  const handleTextSearch = (e) => {
    const textToSearch = e.target.value
    setInputSearch(textToSearch)

    const optionsFiltered = options.filter((option: Option) => {
      const regex = new RegExp(textToSearch, 'gi')
      return option.name.match(regex)
    })

    setOptionsArray(optionsFiltered)
  }

  const handleFocusSearch = () => {
    setShowSelector(true)
    onChange(null)
  }

  const handleSelect = (option) => {
    onChange(option)
  }

  const handleDelete = () => {
    setInputSearch('')
    onChange(null)
    setOptionsArray(options)
  }

  return (
    <div className='select-search'>
      <div className='input-container'>
        <input type="text" value={inputSearch} onChange={handleTextSearch} onFocus={handleFocusSearch} ref={inputRef} />
        { showSelector && optionsArray && (
          <div className='selector' ref={selectorRef}>
            {optionsArray.map(option => <div key={option.id} onClick={() => handleSelect(option)}>{option.name}</div> )}
          </div>
        )}
        {(inputSearch || value) && <AiOutlineCloseCircle className='icon' fill='#888' onClick={handleDelete} />}
      </div>
    </div>
  )
}
