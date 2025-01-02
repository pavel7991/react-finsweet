import styled from 'styled-components'
import { FC, ReactNode } from 'react'
import { theme } from '../../styles/theme'
import { Link } from 'react-router'

const Title = styled.h2`
  margin: ${theme.gap.sm} 0;
`
const LinkTitle = styled(Link)`
  font-size: ${theme.fontSize.xl};
  line-height: ${theme.lineHeight.xl};
  color: ${theme.colors.black};

  &:hover {
    text-decoration: underline;
  }
`

interface TitleProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: ReactNode
}

const PostTitle: FC<TitleProps> = ({ tag = 'h2', children }) => {
  const Tag = tag
  return (
    <Title as={Tag}>
      <LinkTitle to="/">{children}</LinkTitle>
    </Title>
  )
}
export default PostTitle
