import { NavLink } from 'react-router'
import { routes } from '../../config/routes.config'
import styled from 'styled-components'
import { theme } from '../../styles/theme'

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: ${theme.gap.sm};
`
const NavListLink = styled(NavLink)`
  display: flex;
  color: ${theme.colors.white};
  transition: color, 0.3s ease-out;
  position: relative;
  padding: 0.75rem;

  &.active,
  &:hover {
    color: ${theme.colors.yellowDark};
  }
  &::before,
  &.active::before {
    content: '';
    display: block;
    height: 1px;
    width: 0;
    position: absolute;
    bottom: calc(0.75rem - 2px);
    left: 0.75rem;
    transition: all 0.3s ease-out;
    background-color: ${theme.colors.white};
  }

  &:hover::before,
  &.active::before {
    background-color: ${theme.colors.yellowDark};
    width: calc(100% - 0.75rem * 2);
  }
`

const Menu = () => {
  return (
    <nav>
      <NavList>
        {routes.map((route) => (
          <li key={route.path}>
            <NavListLink to={route.path}>{route.label}</NavListLink>
          </li>
        ))}
      </NavList>
    </nav>
  )
}

export default Menu
