import styled from "styled-components";

export const Container = styled.div`
background-color:#212121;
width:100%;
color:white;
`
export const Wrap = styled.div`
height:56px;
display:flex;
align-items:center;
justify-content:center;
border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`

export const InputCon = styled.div`
display:flex;
align-items:center;
justify-content:center;
margin-left:auto;
`

InputCon.Inputs = styled.input`
width:574px;
height:32px;
background: #000000;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: rgba(255, 255, 255, 0.2);
padding-left:8px;
border:none;
outline:none;

`


InputCon.Icon = styled.button`
width:65px;
height:32px;
background: rgba(255, 255, 255, 0.2);
color:red;
border:none;
outline:none;
cursor:pointer;
`

export const NavLogo = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
margin-left:auto;
cursor:pointer;
:active{
    transform:scale(0.98)
}
`

export const NavButton = styled.div`
background: rgba(255, 255, 255, 0.2);
border: 1px solid rgba(255, 255, 255, 0.4);
border-radius: 30px;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
color: #FFFFFF;
padding:4px 8px;
margin:0 8px;
cursor:pointer;
:active{
    transform:scale(0.98)
}
`