import React,{createContext,useState} from 'react'
import { data } from '../Body/mock'

export const Info = createContext()

export const Context = ({children}) => {
    const [cardData, setCardData] = useState(data)
  return (
    <Info.Provider value={[cardData, setCardData]}>{children}</Info.Provider>
  )
}

export default Context