import styled from 'styled-components'

import { data } from '../../data/data'

import Container from '../Container'
import Title from '../Title'
import Post from '../Post/Post'

import { theme } from '../../styles/theme'

const TitlePage = styled(Title)`
  padding-bottom: ${theme.gap.md};
  border-bottom: 1px solid ${theme.colors.mediumGrey};
  font-size: ${theme.fontSize.xxl};
  line-height: ${theme.lineHeight.xxl};
`

const AllPosts = () => {
  return (
    <Container>
      <TitlePage tag="h1">All posts</TitlePage>
      <div>
        {data.post.map((post) => (
          <Post
            key={post.title}
            img={post.img}
            caption={post.caption}
            title={post.title}
            description={post.description}
          />
        ))}
      </div>
    </Container>
  )
}

export default AllPosts
