import { Link } from 'react-router'
import Container from '../Container'
import { routes } from '../../config/routes.config'
import styled from 'styled-components'
import { theme } from '../../styles/theme'

const FooterFlex = styled.footer`
  display: flex;
  justify-content: center;
  gap: ${theme.gap.sm};
`
const FooterLink = styled(Link)`
  display: flex;
  color: ${theme.colors.white};
  font-size: ${theme.fontSize.lg};
  padding: ${theme.gap.xs};

  &:hover {            
     text-decoration: underline;
  `

const FooterLinks = () => {
  return (
    <Container>
      <FooterFlex>
        {routes.map((route) => (
          <FooterLink key={route.path} to={route.path}>
            {route.label}
          </FooterLink>
        ))}
      </FooterFlex>
    </Container>
  )
}

export default FooterLinks
