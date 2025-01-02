import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { ReactNode } from 'react'

const Caption = styled.p`
  color: ${theme.colors.puprle};
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: 3px;
  text-transform: uppercase;
`

const PostCaption = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <Caption className={className}>{children}</Caption>
}
export default PostCaption
