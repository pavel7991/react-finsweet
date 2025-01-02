import styled from 'styled-components'
import { Outlet } from 'react-router'
import Header from './header/Header'
import Footer from './footer/Footer'
import GlobalStyle from '../styles/GlobalStyle'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`

const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Outlet />
        <Footer />
      </Wrapper>
    </>
  )
}

export default Layout
