import React, { useContext } from 'react'
import { Info } from '../context/context'
import { data } from './mock'
import { Card, Container } from './style'

export const Body = () => {
  const [cardData, setCardData] = useContext(Info)
  return (
    <Container>
      {
        cardData.map((value)=>{
          return <Card>
            <Card.Img src={value.url} alt='picture'/>
            <Card.Tipe>
              <Card.TipeLogo src={value.logo}/>
              <Card.Title>
              <Card.Name>{value.name}</Card.Name>
                <Card.Views>{value.title}</Card.Views>
                <Card.Views>{value.views}</Card.Views>
              </Card.Title>
            </Card.Tipe>
          </Card>
        })
      }
    </Container>
  )
}

export default Body