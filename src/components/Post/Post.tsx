import styled from 'styled-components'
import { FC } from 'react'
import { Link } from 'react-router'

import PostTitle from './PostTitle'
import PostCaption from './PostCaption'
import PostDescription from './PostDescription'

import { theme } from '../../styles/theme'

const PostWrapper = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  grid-gap: ${theme.gap.md};
  margin-top: ${theme.gap.xl};

  img {
    width: 100%;
    height: auto;
  }
`
const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

interface PostProps {
  caption: string
  title: string
  img: string
  description: string
}

const Post: FC<PostProps> = ({ caption, title, img, description }) => {
  return (
    <PostWrapper>
      <div>
        <Link to="/post">
          <img src={img} alt="" />
        </Link>
      </div>
      <PostContent>
        <PostCaption>{caption}</PostCaption>
        <PostTitle>{title}</PostTitle>
        <PostDescription>{description}</PostDescription>
      </PostContent>
    </PostWrapper>
  )
}

export default Post
