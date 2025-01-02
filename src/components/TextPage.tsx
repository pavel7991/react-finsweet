import styled from 'styled-components'

import { Section, DataTextPageInterface } from '../data/dataTextPage'
import { FC } from 'react'

import { theme } from '../styles/theme'

interface TextPageProps {
  data: DataTextPageInterface
}

const TypographyStyle = styled.div`
  h2,
  h3 {
    font-size: ${theme.fontSize.xl};
    line-height: ${theme.lineHeight.xl};
    color: ${theme.colors.black};
    margin-bottom: ${theme.fontSize.sm};
    margin-top: ${theme.fontSize.xxl};
  }

  p {
    color: ${theme.colors.mediumGrey};
    font-size: ${theme.fontSize.sm};
    line-height: ${theme.lineHeight.md};
    font-weight: 400;
    margin-bottom: ${theme.fontSize.md};
  }

  ul {
    margin-bottom: ${theme.fontSize.md};
    padding-left: ${theme.gap.md};
    li {
      font-size: ${theme.fontSize.md};
      line-height: ${theme.lineHeight.lg};
      font-weight: 700;
      margin-bottom: ${theme.fontSize.md};
      font-family: ${theme.fontFamaily.title};
      color: ${theme.colors.secondaryBlack};
      opacity: 0.8;
    }
  }
`

const TextPage: FC<TextPageProps> = ({ data }) => {
  return (
    <TypographyStyle>
      <h1 key="data.title">{data.title}</h1>
      {data.sections.map((section: Section, index: number) => {
        switch (section.type) {
          case 'h2':
            return <h2 key={index}>{section.content}</h2>
          case 'h3':
            return <h3 key={index}>{section.content}</h3>
          case 'h4':
            return <h4 key={index}>{section.content}</h4>
          case 'h5':
            return <h5 key={index}>{section.content}</h5>
          case 'h6':
            return <h6 key={index}>{section.content}</h6>
          case 'p':
            return <p key={index}>{section.content}</p>
          case 'ul':
            return (
              <ul key={index}>
                {(section.content as string[]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )
          default:
            return null
        }
      })}
    </TypographyStyle>
  )
}

export default TextPage
