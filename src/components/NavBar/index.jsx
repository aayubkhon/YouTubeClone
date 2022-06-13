import React, { useContext,useState } from "react";
import { Container, InputCon, NavLogo, Wrap,NavButton} from "./style";
import camera from './assets/camera.svg'
import variant from './assets/variants.svg'
import opova from './assets/opova.svg'
import search from './assets/search.svg'
import { Info } from "../context/context";
import { data } from "../Body/mock";
import { typeBtn } from "./typeBtn";




export const NavBar = () => {
  const [cardData, setCardData] = useContext(Info)
  const [Infos,setInfos] = useState('')

  const InfoChange = (e) =>{
    setInfos(e.target.value)
  }

  const InfoKey = (e) =>{
    if(e.key == 'Enter') {
      const newData = data.filter((value)=> value.name.toLowerCase().includes(Infos.toLowerCase()) )
      setCardData(newData) 
    }
  }

  const onSearch = (e)=>{
    const newData = data.filter((value)=> value.name.toLowerCase().includes(Infos.toLowerCase()) )
      setCardData(newData) 
  }

  return (
    <Container>
      <Wrap>
        <InputCon>
        <InputCon.Inputs onKeyDown={InfoKey} onChange={InfoChange} type="text" placeholder='Search' />
        <InputCon.Icon onClick={onSearch}>
        <img src={search} alt="" />
        </InputCon.Icon>
        </InputCon>
        <NavLogo>
          <img src={camera} alt="" />
          <img src={variant} alt="" />
          <img src={opova} alt="" />
        </NavLogo>
      </Wrap>
      <Wrap>
        {
          typeBtn.map((value)=>{
            return <NavButton key={value.id}>{value.title}</NavButton>
          })
        }
      </Wrap>
    </Container>
  )
}

export default NavBar