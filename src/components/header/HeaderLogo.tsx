import { Link } from 'react-router'
import styled from 'styled-components'

const Logo = styled(Link)`
  color: #fff;
  font-size: 40px;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
`

const HeaderLogo = () => {
  return <Logo to="/">Logo</Logo>
}

export default HeaderLogo
