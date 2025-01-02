import styled from 'styled-components'
import { theme } from '../styles/theme'
import { FC, ReactNode } from 'react'

const StyledButton = styled.button`
  display: inline-block;
  font-family: ${theme.fontFamaily.title};
  font-size: 1.125rem;
  line-height: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.black};
  background-color: ${theme.colors.yellowLight};
  padding: 0 3rem;
  border: none;
  height: 3.5rem;
  cursor: pointer;
  transition: background-color, 0.3s ease-in-out;

  &:hover {
    background-color: ${theme.colors.yellowDark};
  }
`

interface ButtonProps {
  children?: ReactNode
}

const Button: FC<ButtonProps> = ({ children = 'Read More' }) => {
  return <StyledButton>{children}</StyledButton>
}

export default Button
