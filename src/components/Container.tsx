import styled from 'styled-components'
import { FC, ReactNode } from 'react'

const StyleContainer = styled.div`
  width: min(100% - 40px, 1280px);
  margin-inline: auto;
`
interface ContainerInterface {
  children: ReactNode
}

const Container: FC<ContainerInterface> = ({ children }) => {
  return <StyleContainer>{children}</StyleContainer>
}

export default Container
