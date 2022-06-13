import React from 'react'
import { Container, SideBarTitle, SideLogo, SideTitle } from './style'
import menu from './assets/menu.svg'
import youtube from './assets/yutube.svg'
import home from './assets/home.svg'
import navigator from './assets/discover.svg'
import sub from './assets/sub.svg'


export const SideBar = () => {
  return (
    <Container>
      <SideLogo>
        <img src={menu} alt="menu" />
        <SideLogo.SideImg src={youtube} alt="yotube" />
        <SideLogo.SideTitle>YouTube</SideLogo.SideTitle>
      </SideLogo>
      <SideTitle>
        <SideBarTitle>
        <SideTitle.SideBarLogo src={home} alt='home'/>
        <SideTitle.Titles>Main</SideTitle.Titles>
        </SideBarTitle>
        <SideBarTitle>
        <SideTitle.SideBarLogo src={navigator} alt='home'/>
        <SideTitle.Titles>Navigator</SideTitle.Titles>
        </SideBarTitle>
        <SideBarTitle>
        <SideTitle.SideBarLogo src={sub} alt='sub'/>
        <SideTitle.Titles>Subscribe</SideTitle.Titles>
        </SideBarTitle>
      </SideTitle>
      <SideTitle>
        <SideBarTitle>
        <SideTitle.SideBarLogo src={home} alt='home'/>
        <SideTitle.Titles>Library</SideTitle.Titles>
        </SideBarTitle>
        <SideBarTitle>
        <SideTitle.SideBarLogo src={navigator} alt='home'/>
        <SideTitle.Titles>History</SideTitle.Titles>
        </SideBarTitle>
      </SideTitle>
      <SideTitle>
        <SideBarTitle>
        <SideTitle.SideBarLogo src={home} alt='home'/>
        <SideTitle.Titles>Library</SideTitle.Titles>
        </SideBarTitle>
        <SideBarTitle>
        <SideTitle.SideBarLogo src={navigator} alt='home'/>
        <SideTitle.Titles>History</SideTitle.Titles>
        </SideBarTitle>
        <SideBarTitle>
        <SideTitle.SideBarLogo src={home} alt='home'/>
        <SideTitle.Titles>Main</SideTitle.Titles>
        </SideBarTitle>
        <SideBarTitle>
        <SideTitle.SideBarLogo src={navigator} alt='home'/>
        <SideTitle.Titles>Navigator</SideTitle.Titles>
        </SideBarTitle>
        <SideBarTitle>
        <SideTitle.SideBarLogo src={home} alt='home'/>
        <SideTitle.Titles>Main</SideTitle.Titles>
        </SideBarTitle>
        <SideBarTitle>
        <SideTitle.SideBarLogo src={navigator} alt='home'/>
        <SideTitle.Titles>Navigator</SideTitle.Titles>
        </SideBarTitle>
        <SideBarTitle>
        <SideTitle.SideBarLogo src={home} alt='home'/>
        <SideTitle.Titles>Main</SideTitle.Titles>
        </SideBarTitle>
        <SideBarTitle>
        <SideTitle.SideBarLogo src={navigator} alt='home'/>
        <SideTitle.Titles>Navigator</SideTitle.Titles>
        </SideBarTitle>
      </SideTitle>
      <SideTitle>
        <SideBarTitle>
        <SideTitle.SideBarLogo src={home} alt='home'/>
        <SideTitle.Titles>Main</SideTitle.Titles>
        </SideBarTitle>
        <SideBarTitle>
        <SideTitle.SideBarLogo src={navigator} alt='home'/>
        <SideTitle.Titles>Navigator</SideTitle.Titles>
        </SideBarTitle>
      </SideTitle>
    </Container>
  )
}

export default SideBar