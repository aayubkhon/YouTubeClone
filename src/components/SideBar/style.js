import styled from "styled-components";

export const Container = styled.div`
background-color:#212121;
display:flex;
flex-direction:column;
width:240px;
height:100vh;
position:sticky;
top: 0;
color:white;
`

export const SideLogo = styled.div`
display:flex;
align-items:center;
padding:10px 15px;
`

SideLogo.SideImg = styled.img`
margin-left:25px;
`

SideLogo.SideTitle = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 900;
font-size: 18px;
line-height: 20px;
`

export const SideTitle = styled.div`
display:flex;
flex-direction:column;
border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  

`

SideTitle.SideBarLogo = styled.img`
width:25px;
height:25px;

`


export const SideBarTitle = styled.div`
display:flex;
align-items:center;
padding:10px 15px;
:hover{
      cursor: pointer;
      background: grey;
    }


`



SideTitle.Titles = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 20px;
color: #FFFFFF;
padding-left:22px;
`