import styled from 'styled-components'
import { theme } from '../styles/theme'

const ArticleContainer = styled.div`
  background-color: ${theme.colors.white};
  padding: ${theme.gap.md} ${theme.gap.sm};
`

const Article = () => {
  return <ArticleContainer></ArticleContainer>
}

export default Article
