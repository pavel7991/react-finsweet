import Container from '../Container'
import Menu from './Menu'
import HeaderLogo from './HeaderLogo'
import styled from 'styled-components'
import { theme } from '../../styles/theme'

const HeaderContainer = styled.header`
  padding: ${theme.gap.sm};
  background-color: ${theme.colors.black};
`
const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <HeaderContent>
          <HeaderLogo />
          <Menu />
        </HeaderContent>
      </Container>
    </HeaderContainer>
  )
}

export default Header
