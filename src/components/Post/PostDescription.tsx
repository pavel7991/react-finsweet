import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { ReactNode } from 'react'

const Description = styled.p`
  font-size: ${theme.fontSize.sm};
  line-height: ${theme.lineHeight.md};
`

const PostDescription = ({ children }: { children: ReactNode }) => {
  return <Description>{children}</Description>
}
export default PostDescription
