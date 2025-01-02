import styled from 'styled-components'
import Title from './Title'
import { data } from '../data/data'
import Container from './Container'
import { theme } from '../styles/theme'
import Button from './Button'
import PostCaption from './Post/PostCaption'

const HeroWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }

  h1 {
    color: ${theme.colors.white};
    font-size: 3rem;
    line-height: 4rem;
    letter-spacing: -0.125rem;
    font-weight: 700;
  }
`

const HeroBackground = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 100%;
  min-height: 100%;
  transform: translate(-50%, -50%);
  z-index: -2;
`
const HeroContent = styled.div`
  position: relative;
  width: 80%;
`
const HeroCaption = styled(PostCaption)`
  color: ${theme.colors.white};
`

const HeroDescription = styled.p`
  color: ${theme.colors.white};
  width: 78%;
  margin: 1rem 0 3rem;
  line-height: ${theme.lineHeight.md};
`

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroBackground src={data.hero.backcgraundImage} alt="" />
      <Container>
        <HeroContent>
          <HeroCaption>{data.hero.caption}</HeroCaption>
          <Title tag="h1">{data.hero.title}</Title>
          <HeroDescription>{data.hero.description}</HeroDescription>
          <Button />
        </HeroContent>
      </Container>
    </HeroWrapper>
  )
}

export default Hero
