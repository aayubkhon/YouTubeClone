import styled from "styled-components";

export const Container = styled.div`
display:flex;
flex-wrap:wrap;
gap:65px;
justify-content:center;
`



export const Card = styled.div`
width:250px;
height:186px;
margin:25px 0px;
transition: all 0.3s ease-in-out;
:hover{
  cursor: pointer;
  transform: scale(1.10);
  background: #212121;
  z-index: 9;
}
`

Card.Img = styled.img`
width:100%;
height:200px;
`

Card.Tipe = styled.div`
display:flex;
align-items:center;
`

Card.TipeLogo = styled.img`
width:50px;
height:50px;
`

Card.Name = styled.p`
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
color: #FFFFFF;
`

Card.Title = styled.div`
display:flex;
flex-direction:column;
margin:10px 10px;
`

Card.Views = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
color: rgba(255, 255, 255, 0.6);
`
