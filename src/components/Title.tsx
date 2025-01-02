import styled from 'styled-components'
import { theme } from '../styles/theme'
import { FC, ReactNode } from 'react'

interface TitleProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: ReactNode
  className?: string
}

const StyledTitle = styled.div`
  color: ${theme.colors.black};
  margin-top: 2rem;
  font-family: ${theme.fontFamaily.title};
`

const Title: FC<TitleProps> = ({ tag = 'h2', children, className }) => {
  return (
    <StyledTitle as={tag} className={className}>
      {children}
    </StyledTitle>
  )
}

export default Title
