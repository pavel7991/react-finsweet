import styled from 'styled-components'
import Container from '../Container'
import FooterLinks from './FooterLinks'
import { theme } from '../../styles/theme'

const FooterContainer = styled.footer`
  padding: ${theme.gap.sm} 0;
  background-color: ${theme.colors.black};
  margin-top: ${theme.gap.xxxl};
`

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterLinks />
      </Container>
    </FooterContainer>
  )
}

export default Footer
