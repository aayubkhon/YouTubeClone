import React from 'react'
import Body from '../Body'
import NavBar from '../NavBar'
import SideBar from '../SideBar'
import { ContentBlog, Wrapper } from './style'

export const Root = () => {
  return (
    <Wrapper>
      <SideBar/>
      <ContentBlog>
      <NavBar/>
      <Body/>
      </ContentBlog>
    </Wrapper>
   
  )
}

export default Root